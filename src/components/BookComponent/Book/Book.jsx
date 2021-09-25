import { useEffect, useState } from 'react';
import './Book.css';

function Book({details, deleteBookCallBack, saveBookCallBack}){

    const [isModeEdit, setIsModeEdit] = useState(false);
    const [data, setData] = useState({
        ...details,
    });
    const [loading, setLoading] = useState(false);

    const handleOnDeleteClick = () => {
        console.log(details);
        deleteBookCallBack(details.idBook)
    }

    const handleOnEditClick = () => {
        setIsModeEdit(!isModeEdit)
    }
    const handleOnChange = e => {
        setData({
            ...data, [e.target.name] : e.target.value, 
        })
    }

    const handleOnSaveClick = async  () => {
        setLoading(true);
         await saveBookCallBack(data);
             setLoading(false);
             setIsModeEdit(false)
         }
        
    
    return (
        
        
        <div className="Book">
                 <img src= "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFRYVFRYVFRYaGhoZGhgYHBYdHBwZGBwZGRoVJCMdIS4lJR4rIRgaJ0YmLS8xNTU2HCQ7QEAzPy41NTEBDAwMEA8QHhISHz0rJSs2NDQ0MT82NDY0NDE0NDQ3NDY0PzE0PTE0NDQ2NDQ0NDQ9NDQ0MTQ0NDQ0MTQ0NDQ0Nv/AABEIAMUBAAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQEDBAYHAgj/xABAEAACAQIDBQQGCAQFBQAAAAABAgADEQQhMQUGEkFRImFxgRMjMkJSkQcUYnKCkqHhorHB0SQzQ1PwFWOTwvH/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEAQX/xAApEQEBAQACAQQBAgYDAAAAAAAAAQIDETEEEiFBURMyImFxgaGxQlKR/9oADAMBAAIRAxEAPwDs0REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERECkRNJ333v8AqwNCiQa5HabIikp0Y8i5Gi8tTlYNy2Sd1LGNb17Yu7177JhWFKmorVRYuC3CqA5gEgHtEcuQzPIHFwX0l4Zj26dakPisGHyQlvkpnKXcsSSSbkkkkksxNySTmbm5J5yt5ReS9vSno+P29Xz+Xfdnbdw2Iyo16bn4Qw4h4qcx5iSV584Gx1APj/OTGzt5sXQtwYipw/C5418LPew+6RJTl/MVa9Df+N/9d4icv2f9JdUWFaijjm1IlT+V7g/mE2fZ+/eCq2Bq+hPSsOED8WafxSybzftm36fkx5jaolqlVVgGVlYHQqQQfMS7JKSIiAiIgIiICIiAiIgIiICIiAiIgIiICIiBSImob672jCL6KlZsQwuAcxTU/wCo39F5+AM5bJO6lnF3eo8b7b3DCg0aJBxDDXIimDox6seS+ZyyPIatQsSSSxJJZiSSzE3JJ5knUxWqlixLMSxLMzG7MxzJJ6meRM2tXVevw8OePPU8/dIiJxcREQK3lQ08xInbIwmKek16TvSbUlGZb+PCRfzmzbO+kDG07BmSuv21AbwDJb5lTNRiSmrPFQ1x41+6durbO+kug1hXpVKJ5svrF/hAf+CbTs3bmGxH+TWpufhDDiHip7Q8xOA3g2OoB8f5yyct+2ffosX9t6/y+kYnBtnbzYyhbgr1OEe65418LPcgfdIm07P+kuoLCvQR+rUmKn8r3B/MJOcuay79HyZ8fLp8rNWwG/WBq61fQnpWHAB+LNP4pstKoGAZSCCLggggg6EEcpOWXwzazrPxqdLsRE64REQEREBERAREQERECkXlDNa3w3oXBpwrZ67jsIdANPSNb3R01Y5DmRy2Sd13Obq9Tytb571Lg04Es2IYXVToq6ekbu1sOZHQEjjeIxDOzMzMzMeJ3bMknme/9ALcrT1i8U9R2d2LO54ndtSTz/SwGgAAGQlkCZ9a91evw8M4s/Hn7qoEREivIiICIiAiIgIiICIiAlQZSelEi7F2kjMQqgszGyqOZ/tqb8gCZ3PdbZgwuFpUQ3HYFi2gLOxdrDkt2Nh0mi7sbANJPSOvrXFgp91dSvlkWPWw5Z9F2S96Kdy8PmvZP8pdw+a831nL7upPEZ0REvYSIiAiIgIiICIlICIkBvTvFTwVPibtVGuKdO9ixGpPRRcXPgMyQDy3r5ruc3V6i3vbvNTwVPk9ZgfR0769WPRR+ugnF8fjXquzuxeo5uzH5acgNAO6e9pY+pWqNVqNx1HzJ0FhooHJByH8ySZiKJn3v3PX4OCcU/n90AtKxEivIiICIiAiIgIiICIiAiJUCBVRNv3N2DxEYmoDwCxpjmSdH7yfd/N8JkbuxsI4l7sPVL7ROjEZlPujIk94HO46fRXhC8Izz4FP8VVumR8gQOdpG1m5+Xr+HP8Ad6FI+yMmIHERoie6g7/3PQTV9rby18FVX0YV8OwNkYWzB7RVxmL3GoYZaTZsTUVVZb9kZ1HOpJzK+J59BYeHNdsY+pjq60qK8QLcKLoCebnooFzfkAfCMWy/DPxZmr/FPj7dZ2BtdMXRWsgKgkgq2qsuRU2y8xqCJKyK3e2QuEoJRU3tcs2nExzY9wvoOQAHKSs2Tx8sWuvdfb4ViInXCIiAiIgUiJEbwbcp4OkalQ3OiILcTtyUf1OgGcW9OyW3qPG8m36eDpcbdpjcJTBzZuncBzbl3kgHiW1dpVK9RqtVuJ38gANEUckF9O8k3JJNzbW1qmJqNWqm7nJVHsqvJF7h155kyPA5nX/mUzb37v6PW9PwTinz5FHzlYiRaCIiAiIgIiICIiAiIgIiIFRJDY+zHxFQU0uNC7AX4VOXhxHMAeJ0Bti4XDPUZUQcTsbAaDqWJ5KBck9BOqbA2QuHQIps5HE7nIgEZsejECwHuqPG8belXLyeydTyy9n4JKKBFW1NLKQM+JgckF9QCTc+8xN+czajFb6ekcZnUIo/oP1P6UDBQH4ch2aaaaj2u4kfIX75qu9u3fQqaaNes+bMPdGl/wCgH7yMYc5u9dREb47c4j9WpE8Ayci5LEn2MsySTn1Jt1m47ibsfVU9LVX19QZj/bQ2IpjvyBJ62GYUSB+jrdniK4ysLqM6Ib3j/vm/L4fNvhM6bNPHjr5rnPyST9PHj7v5r1ERLmQiIgIiIFIiYO1No08NSetVbhRBcnmeQAHMk2AHfBJ38Ra25telhKTVapyGSqPadjoijmTbwFiTYAmcT29tqpiqprVTnoiDNUXkq9T1bmegAAu7x7eqYuoatTsqLhEvcIp5d7nK555DQCQ/DzP/AM/eZ977+J4et6fg/Tnd8/6UA5nX+XdKxEg0kREBERAREQEREBERAREQE9qvcSSQAACSScgABqScrSiibtubsLTEVQQMvRrzAbRvvsDkOSm+rC3Lekd7mM91J7p7A+roHcBqz5AagWz4cvcU2JPvMByCzZlVbG57Cm7sffca+QPLqAOUIhvw6MQOIjRE5Ivf+56CYm0MelNC7ELTQdkdSNG8OQ+fSV+XnW3V7vlh7w7ZGHQu3tt2UTpfl48ye63KajunsF9oV2qVrmirXqN8baiiO61r9FsPeBGLTSvtPFBVyvnc5rTpgi7Hv7uZsNMx2PZWz6eHpJRpDhRBYdSdSxPMkkknqZfx47+anyb/AEc+2eb/AIjKRAAAAAALADIADQS5ETSwEREBERAREQKTT/pNX/Ak9KlMnzbh/mwm4TXt+8Px4DED4UFT/wATLU/9JzXirOK9bn9XKt3dk06zstS4HCWQhiLFSFbTL3xqDJXG7kuovTcEchUGX50BHzUSO3Uq8GITtkElk4dcihbit4qonSaRHu68zTPC3iUb95j5L1Z01Z5dzVnfi2OS47ZVaiL1KbqvxizJ48S3UeZBmFadpABJtZjz4ew/mpyPnaQ2P3Zw1YnsBXPNPVPfra3A57yshNfloz6j/tHLrSk2zaO5lVD6tlcckf1b+AJJRj+JZreLwj0m4aiPTbkHBW/hfJvEXlkva/O868VjxPRWeZxLoiIkgiIgIiICVAgCSuwtkNiagQXCCxdhqAdFH2msbdACx0sYlsk7rP3U2D9YbjceqQnX2XZdb9UXn1PZ+K3SaYtwkDM34FPf7VVvn+ttTLOFwyU0CqAESy2X3mGS01+yD8ze/OZLki+Y9IwuTqEX9uXU3PhC3t5/Ju6vdW67BVK37IzdjqxOZXz59BYeHN94drPjKy0qQLLxcKIuruefS36AXJy0z98tvDPD0zZR/mNfzK36nUmbN9H263oF+sVltWcdhSM6aHl3MefQWHW9mMe6uzriz79efqJndPd5cFS4cmqtZqjjm3JR9lbkAeJ1Jk/ETXJ18MGtXV7qsRE64REQEREBERASxiaAdHRs1ZWUjuYEEfIy/ED59wt8PWs6ktSfhYjI8SMQ1uWdj85vmA3lo1bKWUnkr9lh4HQnwtNvxe72Equz1MPRd2tdmRCxsLA3IvewAv3Ca1tb6OMO9zh3egfhN6ifJjxDyaw6TPrhtbJy8Vt93ct836SC1Uaw4vBagv8AJtb99zLrAgWa/D0cca/P2h4maJidi7SwVyoapTHOneotu9COMeQt3y5szfQDJ1KWyJTtLca3U6eAmfWLlZ+n3O83uN3U5ZXCnp6xD/UD5CeKuHR1KsgZDqFC1KZ8VYZeQ85h4Ha9Kr2lKsebIbN5rr5G8z0sxupVjzPsP52yPgQJxX8xrWO3LoVLtSJpn/tniW/ejHiXwVvKarj918RTuQgrKNTSuzAfaQgMD4A+M6gxzHFYnlx9h/AOvZPgLQ50Da8lqjhP4XXK/wAzOzVWZ59Z/m4pbUcwbEcweh6GUtOv7U2PQrf5yC+gZ7hh3Cqh4h5k+E1Xae47LdqL2Hw1c18qii1vvKPGTlaM+ozrz8NJiZu0Nm1aH+bTZAdGNip6WZSVPhe8xCsL51Z3HmJW090qZYhVBZiQFUZkscgo7yYOl7AYN6rrTQXZuZ0VR7Tt9kf2AzIE6rsbZa4dBTTsm3E7mwYA+05+21vwgAaKL4O7GxBh0BIVqr6kaEjQA/Al9feOfwgTyqtjc9hTdmPvvz8geXWw5SFvbFzcvuvU8KqwAD8P2aaacva7iR8h4mazvXtz0CFEa9Z8yenLi8BoB+8ktvbXGHRqj+2eyicxfRfHmT3d00ndzY1TaOIZnJ9GCGquMsj7NJTyYj5DPUi8sZ7qPHmdXevESv0fbs+mcYqsL00a9MH33BzqG+qqdOrC/LPq8s0KKoqooCqoCqALAACwAHQCXpsmZmdMnLyXk13VYiJJUREQEREBERAREQEREBKSsQKSG2xu3hcVnVpKW+Nbq4/EtjbuOUmYizt2Wy9xzHaf0b1EPHha3HbRanZceDoLHwKjxkI+1sbgyFxNNrXsPSC1z0V1upPgSZ2mWq1JXBVgrKciCAQR0IMqvFmtGfVXxudud7N3vpv2WYoT7tTNT+L+95P0cSpGRKg9LMh8tAPyzG2t9HuFq3alfDt9jNPyHIDuUrNRxO7O0cES1LiqIM+Kjdsu+me1f7obxlGuHUXS8W/23q/it+RSBdfZ60zxL+VtB90ylM68OR5mny+9TbT9TND2dvkVNqqWYGzOmTA9GU8/G/hNswO26VcCzJUt+B1/f8sh0jrj1n6SAQNxWAb4illOfxI2R87+E1/H7n4ercoPRtz9F2CPvUm7PmvCTJ8FWIAYE8lqXDD7rDPz7U9VDbJ+WnpOX3ai6eecRGaub3K5ltDdTEU2AThrAmw4DwPf7SORb5mbDuxu16AmrWsXGXCpvwBsuAHm7XsSNAbD2iZsuOJCqSzLYi3GATnl2WGRGd7G5ynuiclsM8/Rqf4qjfP9epnNWrbza1nqriqSSujEDjI91OSDv/c9JjYzGIiF2IWmg7I5G3vf2+fSXqrAArfsjN2OrNzX+/dYeHOd59stiqgpUwWQMFVV1dybADrnkPn0jM7cxi6v+1io1baOJVEGbX4QfZRBbiqNbkMr9TYcxOw7E2VTwtFaNMZLqTqzH2nPeT/QDICRm5m7YwdLtWNZ7Gow0FtKY+ytz4kk87DZJsxj2xR6jmmr7c+I9RESxnIiICIiAiIgIiICIiAiIgIiICIiAiIgJSViBD7X3ew2KHrqSs1rBxdXHcGWzW7r2mkbU+jaop4sLW4rZhanZYeDqLeRUeM6dEjrMvlbjm3jxXFjtbG4IhMQjcOgWqMm7lcXVj4EzYtl730nsC5pN8L5p875fMeE6DWoq6lXUMpyKsAQR0IORmo7X+jvDVbtRLYdui9qn+QnIdylZVrh/C+c3Hv986v5jK9KjKQOyGGZQ8SG/VeXjYeMs4euRcA3c5FuQUaEf81M0zFbC2jgCWUM9Me9Su4t3pbiXyBA6yyN7nZG7ChyLBltwk9SOoz6ynWLPKycXu+c3uM7fDboAOHpmwt22voNeG/U6k/3k19Hm6/ABi6y9th6pGGaIRbjI5OwPkD1JEg9w92jiqn1isCaKtcX/wBWoDc+Kqdepy5MJ1yXcWOvmoc/JMT9PP8AevUREvYiIiAiIgIiICIiAiIgIiICIiAiIgImBjMGzkFajoAMwpOZ5HI9C3jcdBLNHZzqysa7sBqpvYg3y9rLRM/sn4jAlYkMNlVA1xiKlrLYG5F0Xhvm2dySSDrl0vB2TU5YipyyPGRqzHRgdWI10Cg34RAmYkQNm1LAfWHyN753JB4lv2tNQRowyytLiYKpw8JrcWYN7ONEC2JD3sbcWRGZgScSIpbNqBg3p3IHum9iQrKCbt1biI5kDSwnuts92JtVZQbW9skWAF/bAvl0tmbhtYEpEiamy2IAFesLWNyxNyL3vmMjcZZW4ctTeh2ZUN716ljfS41VlBvxXuCQ2VhcaDkEtaRGO3dwlZuOrQpO/NioufEjUeMvVMC5LEVXAYrYdrshSLgWYcgc+/PinkbPcBfXPkDf2rG6sAc2Jy4gdeXWxDp2WzwzqNFUUKihVAACqAAANAAMgJekUNmvYg1n5kW4xYkqebG4AWwBvqdYOzqhBHp3F/huLZocuIsfcIzJ9o+BOJWJDDZVWxBxNTMtfhuDwvxZC7GzDiFm5cOmlq/9Mq3J+sNcsG0aw1yA4rWz07hAmIkMNlVBf/EORYAcXFcWuOK4Ydq3D3XubZ2Fytsxmt6+opCBeySBccXatfXtDn7vyCViQ/8A0upl69vZto2vFxcXt68pdfBVCW9bkTkLPl2mYC4cH37ZW9leQsQk4lBKwEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/Z" />
                 {loading ? 
                <div>Loading...</div> : (
                    <div>
                    {isModeEdit ? (
                        <>
                            <label for='title'>Title : </label>
                            <input name='title' value={data.title} onChange={handleOnChange} />
                            <label for='type'>Type : </label>
                            <input name='type' value={data.type} onChange={handleOnChange} />
                            <label for='author'>Author : </label>
                            <input name='author' value={data.author} onChange={handleOnChange} />
                            <label for='numberCopies'>Nombre de copies : </label>
                            <input name='numberCopies' value={data.numberCopies} onChange={handleOnChange} />
                            <label for='numberBooksAvailable'>copies disponibles : </label>
                            <input name='numberBooksAvailable' value={data.numberBooksAvailable} onChange={handleOnChange} />
                            <button onClick={handleOnSaveClick}>Save</button>
                        </>
                    ) : (
                            <>
                               <p><label >Id Book : {details.idBook}</label></p>
                                <h1><label >Title : {details.title}</label></h1>
                               <p><label >Type : {details.type}</label></p> 
                               <p><label >Author : {details.author}</label></p> 
                               <p><label >Nbre copies : {details.numberCopies}</label></p> 
                               <p><label >Copies disponibles : {details.numberBooksAvailable}</label></p>
                                                                                               
                                <button onClick={handleOnDeleteClick}>Delete</button> 
                            </>
                    )}
                    
                    <button onClick={handleOnEditClick}> Edit </button> 
                 </div>
                )}
            
        </div>
    )
}
export default Book;