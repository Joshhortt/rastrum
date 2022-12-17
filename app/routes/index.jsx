import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main id="content">
      <h1>A melhor forma de manter um registo das suas notas!</h1>
      <p>
        Experimente a nossa versão Beta e nunca perca o controle das suas
        despesas
      </p>
      <p id="cta">
        <Link to="/notes">Experimenta agora!</Link>
      </p>
    </main>
  );
}
