"use client";

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const SUBJECTS = [
  "Diagnostic de sol",
  "Étude de résilience urbaine",
  "Adhésion Laboratoire du Vivant",
  "Autre",
] as const;

const fieldBase =
  "w-full rounded-md border border-forest-900/15 bg-sand-50 px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-400/70 transition-colors focus:border-forest-700 focus:outline-none focus:ring-2 focus:ring-terra-500/20";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [turnstileToken, setTurnstileToken] = useState<string>("");

  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      organisation: String(data.get("organisation") ?? ""),
      subject: String(data.get("subject") ?? ""),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""),
      turnstileToken,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        if (body.error === "rate_limited") {
          setError("Trop de tentatives. Réessayez dans quelques minutes.");
        } else if (body.error === "bot_check_failed") {
          setError("Vérification anti-bot échouée. Rechargez la page.");
        } else {
          setError(
            "L'envoi a échoué. Réessayez, ou écrivez-nous à contact@recolt.fr.",
          );
        }
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setError("Connexion impossible. Vérifiez votre réseau et réessayez.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-forest-900/10 bg-forest-50 p-10 lg:p-12">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-brand-600">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path
                d="M4 10.5l4 4 8-9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-serif text-2xl tracking-[-0.01em] text-forest-900">
              Message reçu.
            </h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-700">
              Nous revenons vers vous sous 48&nbsp;heures ouvrées. Pour toute
              urgence, écrivez directement à{" "}
              <a
                href="mailto:contact@recolt.fr"
                className="text-forest-900 underline underline-offset-2"
              >
                contact@recolt.fr
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot — hidden from real users, catches bots */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "-9999px",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        <label>
          Site web
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Nom complet" htmlFor="name" required>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={80}
            autoComplete="name"
            placeholder="Camille Delaunay"
            className={fieldBase}
            disabled={submitting}
          />
        </Field>

        <Field label="Email professionnel" htmlFor="email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder="camille@organisation.fr"
            className={fieldBase}
            disabled={submitting}
          />
        </Field>
      </div>

      <Field
        label="Organisation"
        htmlFor="organisation"
        hint="Optionnel"
      >
        <input
          id="organisation"
          name="organisation"
          type="text"
          maxLength={120}
          autoComplete="organization"
          placeholder="Mairie de …, Groupe …, Agence …"
          className={fieldBase}
          disabled={submitting}
        />
      </Field>

      <Field label="Sujet" htmlFor="subject" required>
        <select
          id="subject"
          name="subject"
          required
          defaultValue=""
          className={cn(fieldBase, "appearance-none pr-10")}
          disabled={submitting}
        >
          <option value="" disabled>
            Choisissez un sujet…
          </option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="Message"
        htmlFor="message"
        required
        hint="20 caractères minimum"
      >
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          maxLength={4000}
          rows={6}
          placeholder="Décrivez votre projet, la localisation, et ce que vous cherchez à mesurer."
          className={cn(fieldBase, "resize-y")}
          disabled={submitting}
        />
      </Field>

      {turnstileSiteKey && (
        <Turnstile
          siteKey={turnstileSiteKey}
          options={{ appearance: "interaction-only", theme: "light" }}
          onSuccess={setTurnstileToken}
          onError={() => setTurnstileToken("")}
          onExpire={() => setTurnstileToken("")}
        />
      )}

      <label className="flex items-start gap-3 text-sm text-ink-700">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-forest-900/30 text-terra-500 focus:ring-terra-500/30"
          disabled={submitting}
        />
        <span>
          J'accepte que mes données soient utilisées pour traiter ma demande,
          conformément à la{" "}
          <a
            href="/politique-confidentialite"
            className="text-forest-900 underline underline-offset-2"
          >
            politique de confidentialité
          </a>
          .
        </span>
      </label>

      {error && (
        <div
          role="alert"
          className="rounded-md border border-terra-500/30 bg-terra-50 px-4 py-3 text-sm text-terra-800"
        >
          {error}
        </div>
      )}

      <div className="flex items-center gap-4">
        <Button type="submit" variant="primary" size="lg" disabled={submitting}>
          {submitting ? "Envoi…" : "Envoyer le message"}
        </Button>
        <p className="text-xs text-ink-500">Réponse sous 48&nbsp;h ouvrées.</p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  required,
  hint,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
  hint?: string;
}) { 
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <label
          htmlFor={htmlFor}
          className="text-sm font-medium text-forest-900"
        >
          {label}
          {required && (
            <span aria-hidden className="ml-1 text-terra-500">
              *
            </span>
          )}
        </label>
        {hint && <span className="text-xs text-ink-500">{hint}</span>}
      </div>
      {children}
    </div>
  );
}