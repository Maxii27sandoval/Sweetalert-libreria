
(async () => {

    const { value: fruit } = await Swal.fire({
        title: 'Seleccione su Menu',
        input: 'select',
        inputOptions: {
        'Burger': {
            apples: 'Simple',
            hamburguesa: 'Completa',
            grapes: 'Doble Cheddar',
            oranges: 'Ali Burguer'
        },
        'Especial': {
            potato: 'SalchiPapas Bandeja Grande',
            broccoli: 'SalchiPapas Bandeja Chica',
            carrot: 'Aros de cebolla'
        },
        'Sandwich': 'Sandwich de Milanesa'
    },
        inputPlaceholder: 'Seleccione su Hamburguesa',
        showCancelButton: true,
        inputValidator: (value) => {
        return new Promise((resolve) => {
            if (value === 'hamburguesa' ) {
            resolve()
        } else {
            resolve('En este Momento no nos queda :c')
        }
        })
    }
    })
    
    if (fruit) {
        Swal.fire(`Su pedido fue exitoso c: ${fruit}`)
        Swal.fire(
            'Su pedido ha sido seleccionado con exito c:',
            '¿Desea ordenar algo mas?',
            'success'
        )
    }
    
    })()