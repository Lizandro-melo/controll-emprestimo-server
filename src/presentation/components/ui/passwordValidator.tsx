
export type PasswordValidationResult = {
  valid: boolean;
  errors: string[]; 
};

export function validatePassword(password: string): PasswordValidationResult {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push("Mínimo de 8 caracteres");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("Pelo menos uma letra maiúscula");
  }
  if (!/[0-9]/.test(password)) {
    errors.push("Pelo menos um número");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
