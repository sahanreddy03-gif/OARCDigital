// Small building blocks for the flagship service pages. No hooks here, so both
// server pages and the client shell can import them.

/** OARC's WhatsApp line, digits only (the same number as NAP.phoneE164). */
export const FLAGSHIP_WA = "35679711799";

export function waLink(text: string) {
  return `https://wa.me/${FLAGSHIP_WA}?text=${encodeURIComponent(text)}`;
}

export function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

/**
 * One box, one button. The visitor types a business name and WhatsApp opens with the
 * message written for them. `message` must contain `{x}` where the name goes.
 * Without JavaScript the form still sends the name to wa.me as the message.
 */
export function WaForm({
  id,
  message,
  button,
  placeholder = "Your business name",
  label = "Your business name",
  buttonClass = "btn btn-y",
}: {
  id: string;
  message: string;
  button: string;
  placeholder?: string;
  label?: string;
  buttonClass?: string;
}) {
  return (
    <form className="wa" data-wa={message} action={`https://wa.me/${FLAGSHIP_WA}`} method="get" target="_blank" data-testid={`form-${id}`}>
      <label className="sr" htmlFor={id}>{label}</label>
      <input id={id} name="text" autoComplete="organization" enterKeyHint="send" placeholder={placeholder} data-testid={`input-${id}`} />
      <button className={buttonClass} type="submit" data-testid={`button-${id}`}>
        {button} <Arrow />
      </button>
    </form>
  );
}
