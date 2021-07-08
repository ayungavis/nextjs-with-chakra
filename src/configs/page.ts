import { browserEnv } from './env';
import routeNames from './routes';

/**
 * IEnum interface
 */
export interface IEnum {
  toString(): string;
}

/**
 * Page contants
 *
 */
export class Page implements IEnum {
  /**
   * For values() array
   */
  private static _values = new Array<Page>();

  /**
   * Default value
   */
  private static _defaultTitle = browserEnv.APP_NAME ? browserEnv.APP_NAME : 'Xendit Trial';
  private static _defaultDescription = browserEnv.APP_DESCRIPTION
    ? browserEnv.APP_DESCRIPTION
    : 'Xendit Trial made with love using NextJS TypeScript by Wahyu Adi Kurniawan';

  /**
   * Static page values
   */
  public static readonly MAIN = new Page(
    1,
    Page._defaultTitle,
    Page._defaultDescription,
    routeNames.home
  );

  /**
   * Constructor
   *
   * @param number page id
   * @param pageTitle page title
   * @param pageDescription page description
   * @param relativeUrl relative url
   */
  private constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly description: string,
    public readonly relativeUrl: string,
    public readonly image?: string
  ) {
    Page._values.push(this);
  }

  /**
   * Instance array
   */
  static get values(): Page[] {
    return this._values;
  }

  /**
   * @inheritdoc
   */
  toString = (): string => `${this.id}, ${this.title}, ${this.description}`;
}
