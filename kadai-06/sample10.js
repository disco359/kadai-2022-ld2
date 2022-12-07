const lib = () => {
    throw new Error()
    }
    const main = () => {
    lib()
    }
    main()



const main = () => { lib1() }
const lib1 = () => { lib2() }
const lib2 = () => { lib3() }
const lib3 = () => { throw new() }