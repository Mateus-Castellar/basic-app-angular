import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'filesize' })//parametro name é usado para a chamado do pipe no HTML
export class FilePipeSize implements PipeTransform
{

    transform(size: number)
    {
        let tanmanhoCalculado = (size / (1024 * 1024));
        let extension = ' MB'

        if (tanmanhoCalculado > 1024)
        {
            tanmanhoCalculado = (tanmanhoCalculado / 1024);
            extension = ' GB'
        }

        return tanmanhoCalculado.toFixed(2) + extension;
    }
}