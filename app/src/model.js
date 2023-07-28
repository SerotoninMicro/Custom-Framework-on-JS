import image1 from './assets/pwnr6.jpeg'
import image2 from './assets/futurism.png'
import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

export const model = [
    new TitleBlock('Plastic will never rot by Anastasia Lebed', {
        tag: 'h2',
        styles: {
        background: '#232323',
        color: '#fff',
        'text-align': 'center',
        padding: '1.5rem',
        'font-family': 'futura',
                }
    }),
    new TextBlock('portfolio site of lebed ansatasia written in pure javascript', {
        tag: 'h3',
        styles: {
        'text-align': 'center',
        padding: '1.5rem',
        'font-family': 'futura',
        color: '#fff',
                }
    }),

    new ImageBlock(image1, {
        styles: {
            padding: '2rem 0',
            width: '500px',
                },
        imageStyles: {            
            'flex-direction': 'auto',
            'flex-basis': 'auto',
                },
        alt: 'PWNR art about ecology'
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
    })]
