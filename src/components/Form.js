import React from 'react'
import bgImg from '../assets/PDP.png'
import { useForm } from 'react-hook-form'
import { useState } from "react" 
import axios from "axios"


const Form = () => {


    const { register 
        , handleSubmit 
        , formState:{errors}} = useForm()
    const [selectedItem, setSelectedItem] = useState("");

   



    const onSubmit = data => {
        
        console.log(data);

        const sheetData = {
            nom: data.nom,
            prenom: data.prenom,
            tel: data.tel,
            email: data.email,
            Type:data.Type,
            formation: data.formation,
            niveau:data.niveau
        }

        axios.post('https://sheet.best/api/sheets/b431b53c-41e7-49cd-a9c1-21edf2edfb2a',sheetData).then((response)=>{
            console.log(response);

        })
    }

    


      
    

    

  return (
    <section className="section">
        <div className="register">
            <div className="col-1">
                <h2>Préinscription FBS</h2>
                <span>Faites votre préinscription maintenant </span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("nom")}   name="nom" type="text" placeholder="Nom" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  :placeholder-gray-600  :bg-gray-900  :text-gray-500  :border-gray-700 focus:border-blue-400  :focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" required/>

                    <input {...register("prenom")}  type="text"  name="prenom" placeholder="Prénom" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  :placeholder-gray-600  :bg-gray-900  :text-gray-500  :border-gray-700 focus:border-blue-400  :focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" required/>
                    <input {...register("email")}  type="email"  name="email" required placeholder="nomprenom@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   :text-gray-500  :border-gray-700 focus:border-blue-400  :focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />


                    <input type="text"{...register("tel", { required : true, maxLength: 10 })}  name="tel" placeholder='+216 XX XXX XXX' />

                    


<p className='choix'>Type de formation :</p>
<div className="langue-radio">

<input {...register("Type")}onChange={e=>setSelectedItem(e.target.value)} name="Type"  type="radio" value="Langue"required  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   :text-gray-500  :border-gray-700 focus:border-blue-400  :focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
Linguistique

<input {...register("Type")} onChange={e=>setSelectedItem(e.target.value)} name="Type" type="radio" value="IT"required  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   :text-gray-500  :border-gray-700 focus:border-blue-400  :focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
IT

<div>

</div>
</div>





{selectedItem == "Langue" &&
<div>
<p className='choix' >Langue :</p>
<div className="langue-radio">
<div>
<input {...register("formation")} name="formation"  type="radio" value="Anglais"required  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   :text-gray-500  :border-gray-700 focus:border-blue-400  :focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
<p>Anglaise</p>
</div>
<div>
<input {...register("formation")} name="formation" type="radio" value="Allemand"required  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   :text-gray-500  :border-gray-700 focus:border-blue-400  :focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
<p>Allemande</p>
</div>
<div>
<input {...register("formation")} name="formation" type="radio" value="Francais"required  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   :text-gray-500  :border-gray-700 focus:border-blue-400  :focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
<p>Française</p>
</div>
</div>


<p className='choix' >Niveau :</p>
<div className="cours-radio">
<div>
<input {...register("niveau")}  type="radio" value="A1"required  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   :text-gray-500  :border-gray-700 focus:border-blue-400  :focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
<p>A1</p>
</div>
<div>
<input {...register("niveau")}  type="radio" value="A2"required  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   :text-gray-500  :border-gray-700 focus:border-blue-400  :focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
<p>A2</p>
</div>
<div>
<input {...register("niveau")}  type="radio" value="B1"required  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   :text-gray-500  :border-gray-700 focus:border-blue-400  :focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
<p>B1</p>
</div>
<div>
<input {...register("niveau")}  type="radio" value="B2"required  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   :text-gray-500  :border-gray-700 focus:border-blue-400  :focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
<p>B2</p>
</div>
</div>
</div>  }

{ selectedItem == "IT" &&
<div>
<p className='choix' >Formation :</p>
<div className="it-radio">
<div>
<input {...register("formation")} name="formation"  type="radio" value="Power BI & Preparation à la certification PL-300"required  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   :text-gray-500  :border-gray-700 focus:border-blue-400  :focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
<p>Power BI & Preparation à la certification PL-300 </p>
</div>
<div>
<input {...register("formation")} name="formation" type="radio" value="Graphic Design Illustrator"required  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   :text-gray-500  :border-gray-700 focus:border-blue-400  :focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
<p>Graphic Design Illustrator</p>
</div>
<div>
<input {...register("formation")} name="formation" type="radio" value="E-commerce Tunisie"required  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   :text-gray-500  :border-gray-700 focus:border-blue-400  :focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
<p>E-commerce Tunisie</p>
</div>
</div>
</div>
}
      
    
      




            


                    <button className='btn'>Envoyer</button>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Form