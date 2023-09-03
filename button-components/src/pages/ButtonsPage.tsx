import { Button } from "../components";
import cart from "../assets/cart.svg";
 
const ButtonsPage = () => { 
    return ( 
        <>
            <h1 className="title ">Buttons</h1> 
            <div className="row-container">
                <div className="btn-container">
                    <label className="label">{"<Button />"}</label>
                    <Button value="Default" styles="default btn-md"  />
                </div>
                <div className="btn-container">
                    <label className="label text-gray-3 ">&hover, &focus</label>
                    <Button styles="bg-default-state  btn-md" value="Default" />
                </div>
            </div>
            <div className="row-container">
                <div className="btn-container">
                    <label className="label">&lt;Button variant="outline" /&gt;</label>
                    <Button styles="text-primary border-[1px] btn-md border-primary" value="Default" />
                </div> 
                <div className="btn-container">
                    <label className="label text-gray-3">&hover, &focus</label>
                    <Button   styles=" text-primary border-primary border-[1px] bg-primary-state  btn-md"   value="Default" />
                </div> 
            </div>
            <div className="row-container"> 
                <div className="btn-container">
                    <label className="label">&lt;Button variant="text" /&gt;</label>
                    <Button  styles="text-primary btn-md border-primary" disabledShadow  value="Default" />
                </div> 
                <div className="btn-container">
                    <label className="label">&hover, &focus</label>
                    <Button  styles="text-primary bg-primary-state btn-md outline-none" disabledShadow  value="Default" />
                </div> 
            </div> 
            <div className="row-container">  
                <div className="btn-container">
                    <label className="label">&lt;Button disableShadow /&gt;</label>
                    <Button  styles="text-white bg-primary btn-md outline-none" disabledShadow  value="Default" />
                </div> 
            </div> 
            <div className="row-container"> 
                <div className="btn-container">
                    <label className="label">&lt;Button disabled /&gt;</label>
                    <Button disabled styles="disabled  btn-md" value="Default" />
                </div> 
                <div className="btn-container">
                    <label className="label">&lt;Button disabled variant="text" /&gt;</label>
                    <Button disabled styles="text-disabled  btn-md" value="Default" />
                </div> 
            </div> 

            
            <div className="row-container"> 
                <div className="btn-container">
                    <label className="label">&lt;Button startIcon=”local_grocery_store”  /&gt;</label>
                    <Button disabled styles="bg-primary text-white  btn-md" value="Default" iconLeft={cart} />
                </div> 
                <div className="btn-container">
                    <label className="label">&lt;Button endIcon=”local_grocery_store”  /&gt;</label>
                    <Button disabled styles="bg-primary text-white  btn-md" value="Default" iconRight={cart} />
                </div> 
            </div> 

            <div className="row-container"> 
                <div className="btn-container">
                    <label className="label">&lt;Button size="sm" /&gt;</label>
                    <Button styles="bg-primary text-white btn-sm" value="Default" />
                </div> 
                <div className="btn-container">
                    <label className="label">&lt;Button size="md" /&gt;</label>
                    <Button   value="Default"  styles="bg-primary text-white btn-md" />
                </div> 
                <div className="btn-container">
                    <label className="label">&lt;Button size="lg" /&gt;</label>
                    <Button  value="Default" styles="bg-primary text-white btn-lg" />
                </div>  
            </div>
            <div className="row-container"> 
                <div className="btn-container">
                    <label className="label">&lt;Button color="default" /&gt;</label>
                    <Button styles="bg-default btn-md" value="Default" />
                </div> 
                <div className="btn-container">
                    <label className="label">&lt;Button color="primary" /&gt;</label>
                    <Button   value="Default"  styles="primary" />
                </div> 
                <div className="btn-container">
                    <label className="label">&lt;Button color="secondary" /&gt;</label>
                    <Button  value="Default" styles="secondary" />
                </div>  
                <div className="btn-container">
                    <label className="label">&lt;Button color="danger" /&gt;</label>
                    <Button  value="Default" styles="danger" />
                </div>  
            </div>
            <div className="row-container place-items-start items-end "> 
                <div className="btn-container">
                    <label className="label">&:hover, &:focus</label>
                    <Button styles="bg-default-state btn-md" value="Default" />
                </div> 
                <div className="btn-container place-items-end"> 
                    <Button   value="Default"  styles="bg-[#0039CB] primary " />
                </div> 
                <div className="btn-container"> 
                    <Button  value="Default" styles="secondary bg-secondary-state" />
                </div>  
                <div className="btn-container"> 
                    <Button  value="Default" styles="danger bg-danger-state" />
                </div>  
            </div> 
        </>
    )
}

export default ButtonsPage
