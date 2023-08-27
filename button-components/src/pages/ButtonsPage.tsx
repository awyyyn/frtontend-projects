import { Button } from "../components"

 

const ButtonsPage = () => {

    return (
        <div className="space-y-[45px] pb-[53px]">
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
                    <Button   styles="bg-primary text-white  btn-md"   value="Default" />
                </div> 
            </div>
            <div className="row-container"> 
                <div className="btn-container">
                    <label className="label">&lt;Button disableShadow /&gt;</label>
                    <Button  styles="text-primary border-[1px] btn-md border-primary" disabledShadow  value="Default" />
                </div> 
                <div className="btn-container">
                    <label className="label">&hover, &focus</label>
                    <Button  styles="text-primary border-[1px] btn-md bg-primary-state border-primary" disabledShadow  value="Default" />
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
                    <label className="label">&lt;Button disabled /&gt;</label>
                    <Button styles="bg-primary text-white btn-sm" value="Default" />
                </div> 
                <div className="btn-container">
                    <label className="label">&lt;Button disabled variant="text" /&gt;</label>
                    <Button   value="Default"  styles="bg-primary text-white btn-md" />
                </div> 
                <div className="btn-container">
                    <label className="label">&lt;Button disabled /&gt;</label>
                    <Button  value="Default" styles="bg-primary text-white btn-lg" />
                </div>  
            </div>
            <div className="row-container"> 
                <div className="btn-container">
                    <label className="label">&lt;Button disabled /&gt;</label>
                    <Button styles="bg-default btn-md" value="Default" />
                </div> 
                <div className="btn-container">
                    <label className="label">&lt;Button disabled variant="text" /&gt;</label>
                    <Button   value="Default"  styles="bg-primary text-white btn-md" />
                </div> 
                <div className="btn-container">
                    <label className="label">&lt;Button disabled /&gt;</label>
                    <Button  value="Default" styles="bg-secondary text-white btn-md" />
                </div>  
                <div className="btn-container">
                    <label className="label">&lt;Button disabled /&gt;</label>
                    <Button  value="Default" styles="text-white bg-danger btn-md" />
                </div>  
            </div>
            <div className="row-container"> 
                <div className="btn-container">
                    <label className="label">&lt;Button disabled /&gt;</label>
                    <Button styles="bg-default-state btn-md" value="Default" />
                </div> 
                <div className="btn-container">
                    <label className="label">&lt;Button disabled variant="text" /&gt;</label>
                    <Button   value="Default"  styles="bg-[#0039CB] text-white btn-md" />
                </div> 
                <div className="btn-container">
                    <label className="label">&lt;Button disabled /&gt;</label>
                    <Button  value="Default" styles="bg-secondary-state text-white btn-md" />
                </div>  
                <div className="btn-container">
                    <label className="label">&lt;Button disabled /&gt;</label>
                    <Button  value="Default" styles="text-white bg-danger-state btn-md" />
                </div>  
            </div>
        </div>
    )
}

export default ButtonsPage
