import {Helmet} from 'react-helmet';
export default function Meta(props){
    return(
        <Helmet>
            <meta charset="utf-8"/>
            <link rel="icon" href="./utilities/Misopita_a.png"/>
            <link rel="apple-touch-icon" href="./utilities/Misopita_a.png"/>
            <meta name="theme-color" content="#272265"/>
            {/*<link rel="manifest" href="/manifest.56b1cedc.json"/>
            <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="MDN Web Docs"/>*/}
            <title>{`MisoWeb || ${props.title}`}</title>
            <meta name="robots" content="index, follow"/>
            <meta name="description" content={`${props.description}`}/>
            <meta property="og:url" content="URL"/>
            <meta property="og:title" content="MisoWeb"/>
            <meta property="og:locale" content="es_ES"/>
            <meta property="og:description" content={`${props.description}`}/>
            <meta property="og:image" content="IMAGE"/>
            <meta property="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="MisoWeb"/>
            <meta name="keywords" content="Misora Hina HinaMisora ヒナミソラ Misopa Misoclicker"/>
        </Helmet>
    )
}