import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-categorizer',
  templateUrl: './categorizer.component.html',
  styleUrls: ['./categorizer.component.css']
})
export class CategorizerComponent {

  categoryDataList: any;
  firstData: any;

  importDatabase(event: Event): void {
    // Tomar el evento desencadenado, identificar el elemento HTML de entrada (input)
    // asociado y asignarlo a inputElement
    const inputElement = event.target as HTMLInputElement;

    // Obtener los archivos seleccionados por el usuario en un elemento de entrada
    // de tipo archivo y asignarlos a la constante files
    const files = inputElement.files;

    if (files && files.length > 0) {
      const file = files[0];

      // Crear una nueva instancia del objeto FileReader, el cual permite leer el contenido 
      // de los archivos seleccionados por el usuario
      const fileReader = new FileReader();

      // Establecer un controlador de evento para el evento onload del objeto FileReader,
      // este evento se activa cuando se ha completado la carga del archivo
      fileReader.onload = (e: ProgressEvent<FileReader>) => {

        // Obtener la referencia al objeto FileReader desde el evento target
        const target = e.target as FileReader;

        // Obtener el contenido del archivo leído como un ArrayBuffer
        const arrayBuffer = target.result as ArrayBuffer;

        // Utilizar la biblioteca XLSX para leer el contenido del archivo Excel en un
        // objeto Workbook. Se pasa el arrayBuffer que contiene los datos del archivo y
        // se especifica el tipo de archivo como 'array'
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });

        this.categoryDataList = [];

        // Iterar por cada hoja en el archivo de Excel
        workbook.SheetNames.forEach(sheetName => {
          // Obtener la hoja específica del archivo Excel, identificada por sheetName,
          // y asignarla a worksheet. El objeto workbook representa el libro de trabajo
          // completo (Excel) que ha sido previamente leído y almacenado en workbook
          const worksheet = workbook.Sheets[sheetName];

          // Utilizar la biblioteca XLSX para convertir la hoja de cálculo worksheet en
          // formato XLSX a un objeto JSON. El método sheet_to_json() toma como argumento
          // la hoja worksheet y opciones adicionales. En este caso, se utiliza
          // { header: 1 } como opción para indicar que la primera fila de la hoja se 
          // utiliza como encabezado de las columnas en el objeto JSON resultante
          const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

          // Agrupar los datos por categoría
          const groupedData: { [key: string]: any[] } = jsonData.reduce((result: { [key: string]: any[] }, row: any) => {
            const category = row[2]; // Considerando la posición 3
            if (!result[category]) {
              result[category] = [];
            }
            result[category].push(row);
            return result;
          }, {});

          // Crear una lista de objetos con categoría y datos correspondientes
          Object.keys(groupedData).forEach(category => {
            this.categoryDataList.push({ category: category, data: groupedData[category] });
          });

          // Llamar a la función para manejar el primer elemento después de cargar el archivo
          this.handleTableHeader();
        });
      };
      fileReader.readAsArrayBuffer(file);
    }
  }

  handleTableHeader(): void {
    if (this.categoryDataList.length > 0) {
      // Eliminar el primer elemento del array categoryDataList para asignárselo a firstData
      this.firstData = this.categoryDataList.shift();
    }
  }
}
