import { Quote } from "../components/Quote"
import { Auth } from "../components/auth"
export default function Signin(){
    return(
    <div className="grid grid-cols-2">
        <div>
<Auth type="signin"/>
        </div>
<div className="invisible lg:visible">
    <Quote />
</div>
    </div>
    )
}