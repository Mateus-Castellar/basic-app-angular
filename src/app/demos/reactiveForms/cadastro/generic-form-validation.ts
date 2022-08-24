import { FormGroup } from "@angular/forms";

export class GenericValidatior
{
  constructor(private validationMessages: ValidationMessage) { }

  processarMensagens(container: FormGroup): { [key: string]: string }
  {
    let messages = {};

    for (let controlkey in container.controls)
    {
      if (container.controls.hasOwnProperty(controlkey))
      {
        let c = container.controls[controlkey];

        if (c instanceof FormGroup)
        {
          let childMessages = this.processarMensagens(c);
          Object.assign(messages, childMessages);
        }
        else
        {
          if (this.validationMessages[controlkey])
          {
            messages[controlkey] = '';
            if ((c.dirty || c.touched) && c.errors)
            {
              Object.keys(c.errors).map(messageKey => 
              {
                if (this.validationMessages[controlkey][messageKey])
                {
                  messages[controlkey] += this.validationMessages[controlkey][messageKey] + '<br />';
                }
              })
            }
          }
        }
      }
    }

    return messages;
  }
}


export interface DisplayMessage
{
  [key: string]: string;
}

export interface ValidationMessage
{
  //matriz de validacao
  [key: string]: { [key: string]: string }
}