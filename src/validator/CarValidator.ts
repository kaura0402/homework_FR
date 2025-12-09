import * as joi from 'joi'


export const CarValidator = joi.object({
    brand: joi.string().min(2).max(50).pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$'))
        .messages({'string.patern.base':'Your drand value didn`t match pattern'}).required(),
    price: joi.number().min(0).max(1000000)
        .messages({'namber.min':'min price is 0',
        'namber.max':'maz prise is 1 000 000'}).required(),
    year: joi.number().min(1990).max(2025)
        .messages({'namber.min':'min year is 1990',
            'namber.max':'maz year is 2025'}).required(),
})
