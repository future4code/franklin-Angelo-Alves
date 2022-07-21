export function checaPalindromo(frase) {
  const fraseMinuscula = frase.toLowerCase();
  const fraseSemEspaco = fraseMinuscula.replace(/\s/g, '');
  return (
    fraseSemEspaco ===
    fraseSemEspaco
      .split("")
      .reverse()
      .join("")
  );
}
