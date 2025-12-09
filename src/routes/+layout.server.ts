import { env } from '$env/dynamic/private';
export const load = async ({ locals }) => {
    // Simulate a long process (e.g., fetching data or performing computations)
    const longProcess = async () => {
        // Example: Simulate a delay (e.g., fetching data from an API)
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Long process result');
            }, 3000); // Simulate a 3-second delay
        });
    };

    // Await the result of the long process
    const result = await longProcess();

    // Return the result along with the theme
    return {
        theme: locals.theme,
        longProcessResult: result,
        privateTestVar: env.TEST_VAR
    };
};