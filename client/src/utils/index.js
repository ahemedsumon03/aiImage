import { surpriseMePrompts } from '../constants';
import filesaver from 'file-saver'

export function getSurpriseMePrompt(prompt){ 
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt = surpriseMePrompts[randomIndex]

    if (randomPrompt === prompt) return getSurpriseMePrompt(prompt)
    
    return randomPrompt;
}

export function downloadImage(id, photo) { 
    filesaver.saveAs(photo, `download-${id}.jpg`);
}