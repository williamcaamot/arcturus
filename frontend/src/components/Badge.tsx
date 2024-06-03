import './badge.css';

const Badge = ({label, backgroundColor, textColor} : {label: string, backgroundColor?: string, textColor?: string}) => {

    return (
        <div className="badgeContainer" style={backgroundColor ? {backgroundColor: backgroundColor, color: textColor} : {}}>
            {label}
        </div>
    )
}

export default Badge;