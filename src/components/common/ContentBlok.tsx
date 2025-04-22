import Liner from "./Liner.tsx";
import BulletList from "./BulletList.tsx";


const ContentBlok = (props: { items: string[], title: string, _className: string; }) => {
    return (
        <div className={props._className || ''}>
            <Liner text={props.title} _className="px-3.5 bg-gray-600 mb-3"/>
            <BulletList items={props.items} _className="px-3.5 mb-3"/>
        </div>

    )
}
export default ContentBlok;
