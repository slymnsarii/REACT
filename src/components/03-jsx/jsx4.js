import React from 'react'

const Jsx4 = () => {

    const age=8;


  return (
    <div>

        { age>=18 && <h1>Ehliyet alabilir</h1> }
        {/* age=18 iken burda && false aradığı için ikinci degeri alıyor */}
        { age>=18 || <h1>Ehliyet alamaz</h1> }
        {/* age=8 iken burda || ... aradığı için ikinci değeri alır */}

    </div>
  )
}

export default Jsx4