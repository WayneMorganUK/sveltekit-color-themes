import { browser } from "$app/environment";

export class LocalStorage {
    #key: string;
    #value: string = $state()!;

    constructor(key: string, defaultValue: string) {
        this.#key = key
        this.#value = defaultValue
        if (!browser) {
            return;
        }
    }

    get value(): string {
        return this.#value;
    }

    set value(value: string) {
        this.#value = value;

        if (!browser) {
            return;
        }
        window.localStorage.setItem(this.#key, this.#value);
        document.cookie = `${this.#key}=${this.#value};path=/;SameSite=lax;max-age=${60 * 60 * 24 * 365}`;
        if (this.#key === 'theme') {
            document.documentElement.setAttribute('data-theme', this.#value);
        }
    }
}

export const theme = new LocalStorage('theme', 'blood');

