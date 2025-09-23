export const getFirstAndLastLettersOfName = (fullName: string) => {
  if (!fullName) return '';

  const nameParts = fullName.trim().split(' ');

  if (nameParts.length === 0) {
    return '';
  }

  const firstName = nameParts[0];
  const lastName = nameParts[nameParts.length - 1];

  return firstName[0] + lastName[0];
};
