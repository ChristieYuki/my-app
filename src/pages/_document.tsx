//estrutura html da page base em formato de classe 
// tem no doc do next 

import React from 'react';
import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from 'next/document';

class MyDocument extends NextDocument {
    static getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        return NextDocument.getInitialProps(ctx);
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>

                <body>
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;