document.addEventListener('DOMContentLoaded', function () {

  // NAVIGASI MENU
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // FUNGSI PENCARIAN DAN FILTER
  function filterItems(searchId, categoryId, gridId) {
    const search = document.getElementById(searchId);
    const category = document.getElementById(categoryId);
    const grid = document.getElementById(gridId);

    // Jalankan hanya jika semua elemen tersedia
    if (!search || !category || !grid) {
      return;
    }

    function apply() {
      const q = search.value.toLowerCase().trim();
      const c = category.value;

      grid.querySelectorAll(':scope > article').forEach(function (item) {
        const matchesText = item.textContent.toLowerCase().includes(q);
        const matchesCategory =
          c === 'all' || item.dataset.category === c;

        item.hidden = !(matchesText && matchesCategory);
      });
    }

    search.addEventListener('input', apply);
    category.addEventListener('change', apply);
  }

  // FILTER ARTIKEL
  filterItems('articleSearch', 'articleCategory', 'articleGrid');

  // FILTER KATALOG
  filterItems('bookSearch', 'bookCategory', 'bookGrid');

});
