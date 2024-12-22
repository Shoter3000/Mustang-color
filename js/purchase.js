
document.addEventListener('DOMContentLoaded', () => {
  const purchaseButton = document.querySelector('.purchase-btn');
  if (purchaseButton) {
    purchaseButton.addEventListener('click', () => {
      Swal.fire({
        title: 'To purchase a vehicle, please visit your nearest Ford dealer.',
        icon: 'info',
      });
    });
  }
});