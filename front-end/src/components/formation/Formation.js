import './Formation.css';

function Formation(props){
    return(
        <div className='formation-container'>
            <h4>{props.degree}</h4>
            <p className=''>{props.institution} / {props.local}</p>
            <p className=''>Finalizado em {props.finishDate}</p>
            <p className=''>{props.description}</p>
        </div>
    )
};

export default Formation