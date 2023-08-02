import { defineStore } from 'pinia';

export const use_example_store = defineStore( 'example_store', () => {
    const example_string = ref( "This is an example" );
    const example_number = ref( 3740 );

    return { example_string, example_number };
} );
