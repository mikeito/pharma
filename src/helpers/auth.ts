export const localUserAttributes = ['client', 'token'];

export const setLocalUser = (data: any) => {
  localStorage.setItem('token', data?.token);
  localStorage.setItem('user', JSON.stringify(data.client));
};

export const removeLocalUser = () => {
  localUserAttributes.forEach((attr) => {
    localStorage.removeItem(attr);
  });
};

export const getLocalUser = () => {
  try {
    let user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  } catch {
    return null;
  }
};

export default function maskEmail(email: string): string {
  const [localPart, domainPart] = email.split('@');

  const localPartLength: number = localPart.length;

  if (localPartLength <= 3) {
    return email;
  }

  const firstThreeChars: string = localPart.substring(0, 3);

  const lastChar: string = localPart.charAt(localPartLength - 1);

  const maskedLocalPart: string = `${firstThreeChars}****${lastChar}`;

  return `${maskedLocalPart}@${domainPart}`;
}
