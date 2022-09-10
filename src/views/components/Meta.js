import {Helmet} from 'react-helmet';
export default function Meta(props){
    return(
        <Helmet>
            <title>{`MisoWeb || ${props.title}`}</title>
            <meta name="description" content={`${props.description}`}/>
            <meta property="og:description" content={`${props.description}`}/>
        </Helmet>
    )
}