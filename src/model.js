import image from './assets/pwnr3.png'
import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

export const model = [
    new TitleBlock('Anastasia Lebed Gallery', {
        tag: 'h2',
        styles: {
        background: '#232323',
        color: '#fff',
        'text-align': 'center',
        padding: '1.5rem',
        'font-family': 'futura',
                }
    }),
    new TextBlock('portfolio design of lebed ansatasia written in pure javascript', {
        tag: 'h3',
        styles: {
        'text-align': 'center',
        padding: '1.5rem',
        'font-family': 'futura',
        color: '#fff',
                }
    }),
    new ColumnsBlock([
        'plastic',
        'wil',
        'newer',
        'rot',], {
            tag: '',
            styles: {
            'font-family': 'futura',
            'text-align': 'center',
            color: '#fff',
                    }
     }),
     new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center',
                },
        imageStyles: {
            width: '500px',
            height: 'auto',
                },
        alt: 'Это картинка'
     }),
] 
