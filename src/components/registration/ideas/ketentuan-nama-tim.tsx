const KetentuanNamaTim = () => {
  return (
    <div className="flex px-5 py-3 bg-putih/50 rounded-2xl">
      <ul className="list-disc list-inside text-putih max-lg:text-sm text-lg">
        <li>Nama tim berbeda dengan nama produk.</li>
        <li>
          Nama tim hanya diperkenankan menggunakan huruf abjad dan tidak
          diperkenankan menggunakan angka atau simbol.
        </li>
        <li>
          Nama tim tidak diperbolehkan mengandung nama atau unsur institusi
          tertentu.
        </li>
        <li>Nama tim tidak boleh mengandung unsur yang menyinggung SARA.</li>
        <li>
          Peserta akan menerima pemberitahuan jika nama tim sudah digunakan
          peserta lainnya. Jika demikian, peserta harus mengubah nama tim.
        </li>
      </ul>
    </div>
  );
};

export default KetentuanNamaTim;
