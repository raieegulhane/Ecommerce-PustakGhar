export const filterByGenreFunction = (productList, genreList) => {
    const { 
        adventure,
        autobiography,
        children,
        drama, 
        fantasy,
        fiction,
        philosophy,
        romance,
        self_help,
        science 
    } = genreList;

    if (
        adventure === false &&
        autobiography === false &&
        children === false &&
        drama === false && 
        fantasy === false &&
        fiction === false &&
        philosophy === false &&
        romance === false &&
        self_help === false &&
        science === false 
    ) {
        return([ ...productList ]);
    }

    const filteredProductList = [];

    if (adventure) {
        const filteredData = [];
        [ ...productList ].map(
            (item) => [...item.genre].filter(
                (genreName) => {
                    if (genreName === "adventure") {
                        filteredData.push(item);
                    }
                }
            )
        );

        filteredProductList.push(...filteredData);
    }

    if (autobiography) {
        const filteredData = [];
        [ ...productList ].map(
            (item) => [...item.genre].filter(
                (genreName) => {
                    if (genreName === "autobiography") {
                        filteredData.push(item);
                    }
                }
            )
        );

        filteredProductList.push(...filteredData);
    }

    if (children) {
        const filteredData = [];
        [ ...productList ].map(
            (item) => [...item.genre].filter(
                (genreName) => {
                    if (genreName === "children") {
                        filteredData.push(item);
                    }
                }
            )
        );

        filteredProductList.push(...filteredData);
    }

    if (drama) {
        const filteredData = [];
        [ ...productList ].map(
            (item) => [...item.genre].filter(
                (genreName) => {
                    if (genreName === "drama") {
                        filteredData.push(item);
                    }
                }
            )
        );

        filteredProductList.push(...filteredData);
    }

    if (fantasy) {
        const filteredData = [];
        [ ...productList ].map(
            (item) => [...item.genre].filter(
                (genreName) => {
                    if (genreName === "fantasy") {
                        filteredData.push(item);
                    }
                }
            )
        );

        filteredProductList.push(...filteredData);
    }

    if (fiction) {
        const filteredData = [];
        [ ...productList ].map(
            (item) => [...item.genre].filter(
                (genreName) => {
                    if (genreName === "fiction") {
                        filteredData.push(item);
                    }
                }
            )
        );

        filteredProductList.push(...filteredData);
    }

    if (philosophy) {
        const filteredData = [];
        [ ...productList ].map(
            (item) => [...item.genre].filter(
                (genreName) => {
                    if (genreName === "philosophy") {
                        filteredData.push(item);
                    }
                }
            )
        );

        filteredProductList.push(...filteredData);
    }

    if (romance) {
        const filteredData = [];
        [ ...productList ].map(
            (item) => [...item.genre].filter(
                (genreName) => {
                    if (genreName === "romance") {
                        filteredData.push(item);
                    }
                }
            )
        );

        filteredProductList.push(...filteredData);
    }

    if (self_help) {
        const filteredData = [];
        [ ...productList ].map(
            (item) => [...item.genre].filter(
                (genreName) => {
                    if (genreName === "self-help") {
                        filteredData.push(item);
                    }
                }
            )
        );

        filteredProductList.push(...filteredData);
    }

    if (science) {
        const filteredData = [];
        [ ...productList ].map(
            (item) => [...item.genre].filter(
                (genreName) => {
                    if (genreName === "science") {
                        filteredData.push(item);
                    }
                }
            )
        );

        filteredProductList.push(...filteredData);
    }

    return([ ...filteredProductList ]);
}