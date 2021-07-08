import { DocumentContext } from 'next/document';
import { Context, Store } from 'next-redux-wrapper';
import { GetServerSidePropsContext, NextPageContext } from 'next';
import { IncomingMessage } from 'http';

/**
 * NextDocumentContext with redux store context
 * @tree
 *
 * @author Wahyu Adi Kurniawan<wahyuadikurniawan@live.com>
 */
export type AppContext = DocumentContext &
  Context & {
    readonly store: Store;
  };

export type ServerSideContext = GetServerSidePropsContext &
  DocumentContext &
  Context & { readonly store: Store };

export interface CookieMessage extends IncomingMessage {
  cookies: { [name: string]: string };
}

export interface CookiesPageContext extends NextPageContext {
  req: CookieMessage | undefined;
}
