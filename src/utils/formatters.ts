export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const year = dateObj.getFullYear();
  return `${day}/${month}/${year}`;
}

export const formatPhone = (phoneNumber: string) => {
  const ddi = phoneNumber.slice(0, 2);
  const ddd = phoneNumber.slice(2, 4);
  const firstHalf = phoneNumber.slice(4, 9);
  const secondHalf = phoneNumber.slice(9);
  return `+${ddi} (${ddd}) ${firstHalf}-${secondHalf}`;
}