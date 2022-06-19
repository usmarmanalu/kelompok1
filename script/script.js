// MEMANIPULASI DOM (Document Object Model)

// Mengembalikan tiap-tiap elemen YANG cocok dalam dokument HTML
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuList = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

// class menu-btn ketika di klik
menuBtn.onclick = () => {
	menuList.classList.add("active"); //mengembalikan fungsi class menu-list dan menambahkan class active
	menuBtn.classList.add("hide"); //mengembalikan fungsi class menu-btn dan menambahkan class hide
	body.classList.add("disabledScroll"); //mengembalikan fungsi element body html dan menambahkan class disabledScroll
};

// class cancel-btn ketika di klik
cancelBtn.onclick = () => {
	menuList.classList.remove("active"); //mengembalikan fungsi class menu-list dan menyembunyikan class active
	menuBtn.classList.remove("hide"); //mengembalikan fungsi class menu-btn dan menyembunyikan class hide
	body.classList.remove("disabledScroll"); //mengembalikan fungsi element body html dan menyembunyikan class active
};

// Indikator Scrool
// selector sticky akan tampil jika melakukan scroll pada halaman web sebesar 20% secara vertikal
window.onscroll = () => {
	this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
};
