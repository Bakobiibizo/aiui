import { callRequest } from '../server/server';
import * as ReactDOM from 'react-dom';


const maxToken: HTMLElement | null  = document?.getElementById('max-token');
updateElementValue('[for="max-token"]', maxToken as HTMLElement);





function updateElementValue(valueID: string, element: HTMLElement) {
  const elementValue =  document?.getElementById(valueID)?.textContent;
  element.innerHTML = elementValue?.valueOf() as string;
  return element;
}




const dropdown: HTMLElement | null = document.getElementById('dropdown-menu');
const button: HTMLElement | null = document.querySelector('button[data-bs-toggle="dropdown"]');
if (dropdown !== null && button !== null) {
  dropdown.addEventListener('change', (event) => {
    button.textContent = dropdown.nodeValue;
  });

const temperature: HTMLElement | null = document.getElementById('temp');
const temperatureLabel: Element | null = document.querySelector('label[for="temp"]');
if (temperatureLabel !== null && temperature !== null) {
  temperature.addEventListener('input', function () {
    temperatureLabel.textContent = `Temperature: ${temperature.textContent}`;
  });
}
const topP: HTMLElement | null = document.getElementById('top-p');
const topPLabel: Element | null = document.querySelector('label[for="top-p"]');
if (topPLabel !== null && topP !== null) {
  topP.addEventListener('input', function () {
    topPLabel.textContent = `Top P: ${topP.textContent}`;
  });
}
const presPenalty: HTMLElement | null = document.getElementById('presence-penalty');
const presPenaltyLabel: Element | null = document.querySelector('label[for="presence-penalty"]');
if (presPenaltyLabel !== null && presPenalty !== null) {
  presPenalty.addEventListener('input', function () {
    presPenaltyLabel.textContent = `Presence Penalty: ${presPenalty.textContent}`;
  });
}
const frequencyPenalty: HTMLElement | null = document.getElementById('frequency-penalty');
const frequencyPenaltyLabel: Element | null = document.querySelector('label[for="frequency-penalty"]');
if (frequencyPenaltyLabel !== null && frequencyPenalty !== null) {
  frequencyPenalty.addEventListener('input', function () {
    frequencyPenaltyLabel.textContent = `Frequency Penalty: ${frequencyPenalty.textContent}`;
  });
}
const bestOf: HTMLElement | null = document.getElementById('best-of');
const bestOfLabel: Element | null = document.querySelector('label[for="best-of"]');
if (bestOfLabel !== null && bestOf !== null) {
  bestOf.addEventListener('input', function () {
    bestOfLabel.textContent = `bestOfy: ${bestOf.textContent}`;
  });
}
const promptValue = ReactDOM.findDOMNode(document.getElementById('prompt')!)?.textContent! as string;
const engineValue = ReactDOM.findDOMNode(document.getElementById('label[for="dropdown-menu"]'))!.textContent! as string;
const maxTokenValue = ReactDOM.findDOMNode(document.getElementById('label[for="max-token"]'))!.textContent! as unknown as number;
const temperatureValue = ReactDOM.findDOMNode(document.getElementById('label[for="temp"]'))!.textContent! as unknown as number;
const topPValue = ReactDOM.findDOMNode(document.getElementById('label[for="top-p"]'))!.textContent! as unknown as number;
const presPenaltyValue = ReactDOM.findDOMNode(document.getElementById('label[for="presence-penalty"]'))!.textContent! as unknown as number;
const frequencyPenaltyValue = ReactDOM.findDOMNode(document.getElementById('label[for="frequency-penalty"]'))!.textContent! as unknown as number;
const bestOfValue = ReactDOM.findDOMNode(document.getElementById('label[for="best-of"]'))!.textContent! as unknown as number;
let gptResponse = document.getElementById('gpt-response')?.getAttribute('label[for="value"]');
const onSubmitButton:

submitButton: HTMLElement | null = findDOMNode(document.getElementById('submit-button'))


  const newRequest = {
    engine: engineValue,
    prompt: promptValue!,
    maxTokens: maxTokenValue!,
    temperature: temperatureValue!,
    topP: topPValue!,
    presencePenalty: presPenaltyValue!,
    frequencyPenalty: frequencyPenaltyValue!,
    bestOf: bestOfValue!,
  };

  const newResponse = callRequest(newRequest!)
  console.log(newResponse);
  if (gptResponse !== null) {
    try {

      gptResponse! = document.getElementById('gpt-response')!.textContent!;

    } catch {
      console.error(console.error(Error));
    };
  };
});
