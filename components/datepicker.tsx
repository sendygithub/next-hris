    import React, { useState } from 'react';
    import DatePicker from 'react-datepicker';
    import "react-datepicker/dist/react-datepicker.css"; // Impor CSS-nya

    function DatePickerComponent() {
      const [selectedDate, setSelectedDate] = useState(new Date());

      return (
        <div>
          <p>Pilih Tanggal:</p>
          <DatePicker
            selected={selectedDate} // Tanggal yang terpilih
            onChange={(date) => setSelectedDate(date)} // Fungsi untuk mengubah tanggal
            dateFormat="dd/MM/yyyy" // Format tampilan tanggal
            isClearable // Opsi untuk menghapus tanggal yang dipilih
            placeholderText="Pilih tanggal" // Teks placeholder
          />
          <p>Tanggal Dipilih: {selectedDate.toLocaleDateString()}</p>
        </div>
      );
    }

    export default DatePickerComponent;