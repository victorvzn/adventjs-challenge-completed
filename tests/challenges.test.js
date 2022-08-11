/* no-undef */

const contarOvejas = require('../src/01-contarOvejas.js')
const listGifts = require('../src/02-listGifts.js')
const isValid = require('../src/03-isValid.js')
const createXmasTree = require('../src/04-createXmasTree.js')
const daysToXmas = require('../src/05-daysToXmas.js')
const sumPairs = require('../src/06-sumPairs.js')
const contains = require('../src/07-contains.js')
const maxProfit = require('../src/08-maxProfit.js')
const groupBy = require('../src/09-groupBy.js')
const getCoins = require('../src/10-getCoins.js')
const shouldBuyFidelity = require('../src/11-shouldBuyFidelity.js')
const getMinJump = require('../src/12-getMinJump.js')
const wrapGifts = require('../src/13-wrapGifts.js')
const missingReindeer = require('../src/14-missingReindeer.js')
const checkSledJump = require('../src/15-checkSledJump.js')
const decodeNumbers = require('../src/16-decodeNumbers.js')
const countPackages = require('../src/17-countPackages.js')
const fixFiles = require('../src/18-fixFiles.js')
const learn = require('../src/19-learn.js')
const pangram = require('../src/20-pangram.js')
const canCarry = require('../src/21-canCarry.js')
const countDecorations = require('../src/22-countDecorations.js')
const canReconfigure = require('../src/23-canReconfigure.js')
const checkIsSameTree = require('../src/24-checkIsSameTree.js')
const canMouseEat = require('../src/25-canMouseEat.js')


describe('01-Contando ovejas para dormir', () => {
  test('contarOvejas(ovejas)', () => {
    const ovejas = [
      { name: 'Noa', color: 'azul' },
      { name: 'Euge', color: 'rojo' },
      { name: 'Navidad', color: 'rojo' },
      { name: 'Ki Na Ma', color: 'rojo' },
      { name: 'AAAAAaaaaa', color: 'rojo' },
      { name: 'Nnnnnnnn', color: 'rojo' }
    ]

    const ovejasFiltradas = [
      { name: 'Navidad', color: 'rojo' },
      { name: 'Ki Na Ma', color: 'rojo' }
    ]

    expect(contarOvejas(ovejas)).toEqual(ovejasFiltradas)
  })
})

describe('02-¡Ayuda al elfo a listar los regalos!', () => {
  test('listGifts(letter)', () => {
    const carta = 'bici coche balón _playstation bici coche peluche'
    const regalos = { bici: 2, coche: 2, balón: 1, peluche: 1 }

    expect(listGifts(carta)).toEqual(regalos)
  })
})

describe('03-El Grinch quiere fastidiar la Navidad', () => {
  test('isValid(letter)', () => {
    expect(isValid("bici coche (balón) bici coche peluche")).toBe(true)
    expect(isValid("(muñeca) consola bici")).toBe(true)

    expect(isValid("bici coche (balón bici coche")).toBe(false)
    expect(isValid("peluche (bici [coche) bici coche balón")).toBe(false)
    expect(isValid("(peluche {) bici")).toBe(false)
    expect(isValid("() bici")).toBe(false)
  })
})

describe('04-¡Es hora de poner la navidad en casa!', () => {
  test('createXmasTree(height) -> 25', () => {
    
    const xmasTree25 = [
      "________________________*________________________",
      "_______________________***_______________________",
      "______________________*****______________________",
      "_____________________*******_____________________",
      "____________________*********____________________",
      "___________________***********___________________",
      "__________________*************__________________",
      "_________________***************_________________",
      "________________*****************________________",
      "_______________*******************_______________",
      "______________*********************______________",
      "_____________***********************_____________",
      "____________*************************____________",
      "___________***************************___________",
      "__________*****************************__________",
      "_________*******************************_________",
      "________*********************************________",
      "_______***********************************_______",
      "______*************************************______",
      "_____***************************************_____",
      "____*****************************************____",
      "___*******************************************___",
      "__*********************************************__",
      "_***********************************************_",
      "*************************************************",
      "________________________#________________________",
      "________________________#________________________"
    ]
    const xmasTree2 = '_*_\n***\n_#_\n_#_'
    const xmasTree3 = '__*__\n_***_\n*****\n__#__\n__#__'
    const xmasTree4 = '___*___\n__***__\n_*****_\n*******\n___#___\n___#___'
    const xmasTree1 = '*\n#\n#'

    expect(createXmasTree(25)).toEqual(xmasTree25.join('\n'))
    
    expect(createXmasTree(2)).toEqual(xmasTree2)
    expect(createXmasTree(3)).toEqual(xmasTree3)
    expect(createXmasTree(4)).toEqual(xmasTree4)
    expect(createXmasTree(1)).toEqual(xmasTree1)

    expect(createXmasTree(200)).toBe("Entrada invalida!")
    expect(createXmasTree(-15)).toBe("Entrada invalida!")
  })
})

describe('05-Contando los días para los regalos', () => {
  test('daysToXmas(date)', () => {
    expect(daysToXmas(new Date('Dec 1, 2021'))).toBe(24)
    expect(daysToXmas(new Date('Dec 24, 2021 00:00:01'))).toBe(1)
    expect(daysToXmas(new Date('Dec 24, 2021 23:59:59'))).toBe(1)
    expect(daysToXmas(new Date("December 20, 2021 03:24:00"))).toBe(5)

    expect(daysToXmas(new Date('Dec 25, 2021'))).toBe(0)
    expect(daysToXmas(new Date('Dec 26, 2021'))).toBe(-1)
    expect(daysToXmas(new Date('Dec 31, 2021'))).toBe(-6)
    expect(daysToXmas(new Date('Jan 1, 2022 00:00:01'))).toBe(-7)
    expect(daysToXmas(new Date('Jan 1, 2022 23:59:59'))).toBe(-7)
  })
})

describe('06-Rematando los exámenes finales', () => {
  test('sumPairs(numbers, result)', () => {
    expect(sumPairs([3, 5, 7, 2], 10)).toEqual([3, 7])
    expect(sumPairs([-3, -2, 7, -5], 10)).toEqual(null)
    expect(sumPairs([2, 2, 3, 1], 4)).toEqual([2, 2])
    expect(sumPairs([6, 7, 1, 2], 8)).toEqual([6, 2])
    expect(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)).toEqual([1, 5])
  })
})

describe('07-Buscando en el almacén...', () => {
  test('contains(ovejas)', () => {
    const almacen = {
      'estanteria1': {
        'cajon1': {
          'producto1': 'coca-cola',
          'producto2': 'fanta',
          'producto3': 'sprite'
        }
      },
      'estanteria2': {
        'cajon1': 'vacio',
        'cajon2': {
          'producto1': 'pantalones',
          'producto2': 'camiseta' // <- ¡Está aquí!
        }
      }
    }
    expect(contains(almacen, 'camiseta')).toBeTruthy()
    
    const otroAlmacen = {
      'baul': {
        'fondo': {
          'objeto': 'cd-rom',
          'otro-objeto': 'disquette',
          'otra-cosa': 'mando'
        }
      }
    }
    expect(contains(otroAlmacen, 'gameboy')).toBeFalsy()
  })
})

describe('08-La locura de las criptomonedas', () => {
  test('maxProfit(prices)', () => {
    const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
    expect(maxProfit(pricesBtc)).toBe(16) // -> 16 (compra a 18, vende a 34)

    const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
    expect(maxProfit(pricesEth)).toBe(60) // -> 60 (compra a 10, vende a 70)

    const pricesDoge = [18, 15, 12, 11, 9, 7]
    expect(maxProfit(pricesDoge)).toBe(-1) // -> -1 (no hay ganancia posible)

    const pricesAda = [3, 3, 3, 3, 3]
    expect(maxProfit(pricesAda)).toBe(-1) // -> -1 (no hay ganancia posible)
  })
})

describe('09-Agrupando cosas automáticamente', () => {
  test('groupBy(value)', () => {
    expect(groupBy([6.1, 4.2, 6.3], Math.floor))
      .toEqual({ 6: [6.1, 6.3], 4: [4.2] })
    
      expect(groupBy(['one', 'two', 'three'], 'length'))
      .toEqual({ 3: ['one', 'two'], 5: ['three'] })
    
      expect(groupBy([{age: 23}, {age: 24}], 'age'))
      .toEqual({ 23: [{age: 23}], 24: [{age: 24}] })

    expect(groupBy(
      [1397639141184, 1363223700000],
      timestamp => new Date(timestamp).getFullYear()
    )).toEqual({ 2013: [1363223700000], 2014: [1397639141184] })

    expect(groupBy([
      { title: 'JavaScript: The Good Parts', rating: 8 },
      { title: 'Aprendiendo Git', rating: 10 },
      { title: 'Clean Code', rating: 9 },
    ], 'rating')).toEqual({
      8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
      9: [{ title: 'Clean Code', rating: 9 }],
      10: [{ title: 'Aprendiendo Git', rating: 10 }]
    })
  })
})

describe('10-La máquina de cambio', () => {
  test('getCoins(change)', () => {
    expect(getCoins(51))
      .toEqual([1, 0, 0, 0, 0, 1]) // una moneda de 1 céntimo y otra de 50 céntimos
    expect(getCoins(3))
      .toEqual([1, 1, 0, 0, 0, 0]) // una moneda de 1 céntimo y otra de 2
    expect(getCoins(5))
      .toEqual([0, 0, 1, 0, 0, 0]) // una moneda de 5 céntimos
    expect(getCoins(16))
      .toEqual([1, 0, 1, 1, 0, 0]) // una moneda de 1 céntimo, una de 5 y una de 10
    expect(getCoins(100))
      .toEqual([0, 0, 0, 0, 0, 2]) // dos monedas de 50 céntimos
  })
})

describe('11-¿Vale la pena la tarjeta fidelidad del cine?', () => {
  test('shouldBuyFidelity(times)', () => {
    expect(shouldBuyFidelity(1)).toBe(false) // Mejor comprar tickets de un sólo uso
    expect(shouldBuyFidelity(100)).toBe(true) // Mejor comprar tarjeta fidelidad
  })
})

describe('12-La ruta perfecta para dejar los regalos', () => {
  test('getMinJump(obstacles)', () => {
    expect(getMinJump([5, 3, 6, 7, 9])).toBe(4)
    expect(getMinJump([2, 4, 6, 8, 10])).toBe(7)

    expect(getMinJump([1, 2, 3, 5])).toBe(4)
    expect(getMinJump([3, 7, 5])).toBe(2)
    expect(getMinJump([9, 5, 1])).toBe(2)
  })
})

describe('13-Envuelve regalos con asteriscos', () => {
  test('wrapGifts(gifts)', () => {
    expect(wrapGifts(["📷", "⚽️"]))
      .toEqual([
        '****',
        '*📷*',
        '*⚽️*',
        '****'
      ])

    expect(wrapGifts(["🏈🎸", "🎮🧸"]))
      .toEqual([
        '******',
        '*🏈🎸*',
        '*🎮🧸*',
        '******'
      ])

    expect(wrapGifts(["📷"]))
      .toEqual([
        '****',
        '*📷*',
        '****'
      ])
  })
})

describe('14-En busca del reno perdido', () => {
  test('missingReindeer(ids)', () => {
    expect(missingReindeer([0, 2, 3])).toBe(1)
    expect(missingReindeer([5, 6, 1, 2, 3, 7, 0])).toBe(4)
    expect(missingReindeer([0, 1])).toBe(2) // (¡es el último el que falta!)
    expect(missingReindeer([3, 0, 1])).toBe(2)
    expect(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])).toBe(8)
    expect(missingReindeer([0])).toBe(1) // (¡es el último el que falta!)
  })
})

describe('15-El salto perfecto', () => {
  test('checkSledJump(heights)', () => {
    expect(checkSledJump([1, 2, 3, 2, 1])).toBe(true) // sube y baja de forma estricta
    expect(checkSledJump([0, 1, 0])).toBe(true) // sube y baja de forma estricta
    expect(checkSledJump([0, 3, 2, 1])).toBe(true) // sube y baja de forma estricta
    expect(checkSledJump([0, 1000, 1])).toBe(true) // sube y baja de forma estricta

    expect(checkSledJump([2, 4, 4, 6, 2])).toBe(false) // no sube de forma estricta
    expect(checkSledJump([1, 2, 3])).toBe(false) // sólo sube
    expect(checkSledJump([1, 2, 3, 2, 1, 2, 3])).toBe(false) // sube y baja y sube... ¡no vale!
  })
})

describe('16-Descifrando los números...', () => {
  test('decodeNumbers(symbols)', () => {
    expect(decodeNumbers('...')).toBe(3)
    expect(decodeNumbers('.,')).toBe(4) // (5 - 1)
    expect(decodeNumbers(',.')).toBe(6) // (5 + 1)
    expect(decodeNumbers(',...')).toBe(8) // (5 + 3)
    expect(decodeNumbers('.........!')).toBe(107) // (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
    expect(decodeNumbers('.;')).toBe(49) // (50 - 1)
    expect(decodeNumbers('..,')).toBe(5) // (-1 + 1 + 5)
    expect(decodeNumbers('..,!')).toBe(95) // (1 - 1 - 5 + 100)
    expect(decodeNumbers('.;!')).toBe(49) // (-1 -50 + 100)
    expect(decodeNumbers('!!!')).toBe(300)
    expect(decodeNumbers(';!')).toBe(50)
    expect(decodeNumbers(';.W')).toBe(NaN) // NaN
  })
})

describe('17-La locura de enviar paquetes en esta época', () => {
  test('countPackages(carriers, carrierID)', () => {
    const carriers = [
      ['dapelu', 5, ['midu', 'jelowing']],
      ['midu', 2, []],
      ['jelowing', 2, []]
    ]
    
    expect(countPackages(carriers, 'dapelu')).toBe(9)
    // 5 de dapelu, 2 de midu y 2 de jelowing = 9
    
    const carriers2 = [
      ['lolivier', 8, ['camila', 'jesuspoleo']],
      ['camila', 5, ['sergiomartinez', 'conchaasensio']],
      ['jesuspoleo', 4, []],
      ['sergiomartinez', 4, []],
      ['conchaasensio', 3, ['facundocapua', 'faviola']],
      ['facundocapua', 2, []],
      ['faviola', 1, []]
    ]
    
    expect(countPackages(carriers2, 'camila')).toBe(15)
    // 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15
  })
})

describe('18-El sistema operativo de Santa Claus', () => {
  test('fixFiles(files)', () => {
    const files = ['photo', 'postcard', 'photo', 'photo', 'video']
    expect(fixFiles(files)).toEqual(['photo', 'postcard', 'photo(1)', 'photo(2)', 'video'])

    const files2 = ['file', 'file', 'file', 'game', 'game']
    expect(fixFiles(files2)).toEqual(['file', 'file(1)', 'file(2)', 'game', 'game(1)'])

    // ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
    const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
    expect(fixFiles(files3)).toEqual(['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)'])
  })
})

describe('19-¿Qué deberíamos aprender en Platzi?', () => {
  test('learn(time, courses)', () => {
    expect(learn(10, [2, 3, 8, 1, 4])).toEqual([0, 2]) // con 10 horas disponibles lo mejor es que completemos los cursos en el índice 0 y 2.

    expect(learn(15, [2, 10, 4, 1])).toEqual([1, 2]) // Los cursos en [1, 2] son 14 horas, es la mejor opción.

    expect(learn(25, [10, 15, 20, 5])).toEqual([0, 1]) // los cursos [0, 1] y [2, 3] completan exactamente con 25 horas pero siempre devolvemos el primero que encontremos

    expect(learn(8, [8, 2, 1])).toEqual([1, 2]) // para hacer dos cursos, no podemos hacer el de 8 horas, así que devolvemos el de 1 y 2.

    expect(learn(8, [8, 2, 1, 4, 3])).toEqual([3, 4]) // usamos el máximo tiempo disponible así que [3, 4] usa 7 horas y el [1, 2] sólo usaría 3 horas.

    expect(learn(4, [10, 14, 20])).toBe(null) // no nos da tiempo a hacer dos cursos

    expect(learn(5, [5, 5, 5])).toBe(null) // no nos da tiempo a hacer dos cursos
  })
})

describe('20-¿Una carta de pangramas? ¡QUÉ!', () => {
  test('pangram(letter)', () => {
    expect(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')).toBe(true)
    expect(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')).toBe(true)

    expect(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')).toBe(false)
    expect(pangram('De la a a la z, nos faltan letras')).toBe(false)
  })
})

describe('21-La ruta con los regalos', () => {
  test('canCarry(capacity, trip)', () => {
    expect(canCarry(4, [[2, 5, 8], [3, 6, 10]])).toBe(false)
    // En el punto 5 recoge 2 regalos...
    // En el punto 6 recoge 3 regalos...
    // Del punto 6 al 8 tendría 5 regalos en total
    // Y su capacidad es 4... así que ¡no podría!

    expect(canCarry(3, [[1, 1, 5], [2, 2, 10]])).toBe(true)
    // En el punto 1 recoge 1 regalo...
    // En el punto 2 recoge 2 regalos...
    // En el punto 5 entrega 1 regalo...
    // En el punto 10 entrega 2 regalos...
    // ¡Sí puede! Nunca superó la carga máxima de 3 regalos

    expect(canCarry(3, [[2, 1, 5],[3, 5, 7]])).toBe(true) // nunca supera el máximo de capacidad
    expect(canCarry(4, [[2, 3, 8],[2, 5, 7]])).toBe(true) // del punto 5 al 7 lleva 4 regalos y no supera el máximo

    expect(canCarry(1, [[2, 3, 8]])).toBe(false) // no podría ni con el primer viaje
    expect(canCarry(2, [[1, 2, 4], [2, 3, 8]])).toBe(false) // del punto 3 al 4 supera la capacidad máxima porque llevaría 3 regalos
  })
})

describe('22-¿Cuantos adornos necesita el árbol?', () => {
  test('countDecorations(bigTree)', () => {
    // tenemos el árbol en forma de objeto
    const tree = {
      value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
      left: {
        value: 2, // el nodo izquierdo necesita dos decoraciones
        left: null, // no tiene más ramas
        right: null // no tiene más ramas
      },
      right: {
        value: 3, // el nodo de la derecha necesita tres decoraciones
        left: null, // no tiene más ramas
        right: null // no tiene más ramas
      }
    }

    /* Gráficamente sería así:
        1
      /   \
    2     3

    1 + 2 + 3 = 6
    */

    expect(countDecorations(tree)).toBe(6)

    const bigTree = {
      value: 1,
      left: {
        value: 5,
        left: {
          value: 7,
          left: {
            value: 3,
            left: null,
            right: null
          },
          right: null
        },
        right: null
      },
      right: {
        value: 6,
        left: {
          value: 5,
          left: null,
          right: null
        },
        right: {
          value: 1,
          left: null,
          right: null
        }
      }
    }

    /*
            1
          /   \
        5     6
        /     / \
      7     5   1
      /
    3
    */

    expect(countDecorations(bigTree)).toBe(28)
  })
})

describe('23-¿Puedes reconfigurar las fábricas para no parar de crear regalos?', () => {
  test('canReconfigure(from, to)', () => {
    expect(canReconfigure('BAL', 'LIB')).toBe(true)
    /* la transformación sería así:
    B -> L
    A -> I
    L -> B
    */

    expect(canReconfigure('CON', 'JUU')).toBe(false)
    /* no se puede hacer la transformación:
    C -> J
    O -> U
    N -> FALLO
    */

    expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
    /* no se puede hacer la transformación:
    X -> X
    B -> X (FALLO, no mantiene el orden de transformación y la B no puede asignarse a la X que ya se asignó a otra) 
    O -> B
    X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)
    */

    expect(canReconfigure('XBOX', 'XOBX')).toBe(true)

    expect(canReconfigure('MMM', 'MID')).toBe(false)
    /* no se puede hacer la transformación:
    M -> M (BIEN, asigna el mismo carácter a si mismo)
    M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
    M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
    */

    expect(canReconfigure('AA', 'MID')).toBe(false) // no tiene la misma longitud

    // Hidden tests

    expect(canReconfigure('XBOX', 'XXOB')).toBe(false)
    expect(canReconfigure('xxxMMM', 'aaaDDD')).toBe(true)
    expect(canReconfigure('aaaDDDmmm', 'aaaDDDmmm')).toBe(true)
    expect(canReconfigure('xxxqqqeeefffggg', 'xxxqqqeeefffgg')).toBe(false)
    expect(canReconfigure('abcdefghijkl', 'lkjihgfedcba')).toBe(true)
  })
})

describe('24-Comparando árboles de Navidad', () => {
  test('checkIsSameTree(bigTree)', () => {
    const tree = {
      value: 1,
      left: { value: 2, left: null, right: null },
      right: { value: 3, left: null, right: null }
    }
    
    expect(checkIsSameTree(tree, tree)).toBe(true)
    
    const tree2 = {
      value: 1,
      left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
      right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
    }
    
    expect(checkIsSameTree(tree, tree2)).toBe(false)
    expect(checkIsSameTree(tree2, tree2)).toBe(true)
  })
})

describe('25-El último juego y hasta el año que viene 👋', () => {
  test('contar(direction, game)', () => {
    const room = [
      [' ', ' ', ' '],
      [' ', ' ', 'm'],
      [' ', ' ', '*']
    ]
    
    expect(canMouseEat('up',    room)).toBe(false)
    expect(canMouseEat('down',  room)).toBe(true)
    expect(canMouseEat('right', room)).toBe(false)
    expect(canMouseEat('left',  room)).toBe(false)
    
    const room2 = [
      ['*', ' ', ' ', ' '],
      [' ', 'm', '*', ' '],
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', '*']
    ]
    
    expect(canMouseEat('up',    room2)).toBe(false)
    expect(canMouseEat('down',  room2)).toBe(false)
    expect(canMouseEat('right', room2)).toBe(true)
    expect(canMouseEat('left',  room2)).toBe(false)
  })
})
