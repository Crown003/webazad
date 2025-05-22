"use server"
const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ;

const contactUs = async (formData: any) => {
        const name = formData.get('name')
        const phone = formData.get('phone')
        const email = formData.get('email')
        const message = formData.get('message')
        if(scriptURL){  
            try {
                const res = await fetch(scriptURL,{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "event": "Home gallery contact",
                        name,
                        phone,
                        email,
                        message
                    })
                    
                })
                if(!res.ok){
                    console.log(res)
                    throw new Error("Failed to contact at the moment..")
                }
                return {successmessage: "thankyou for contacting us we will reach you shortly."}
            }catch(error){
                return {errormessage:"Oops something wents wrong."}
            }
        }
}

export default contactUs;