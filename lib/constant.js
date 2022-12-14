const moment = require('moment');

module.exports = {
    limit: {
        product: 1000,
        reviews: 2000,
    },
    defaultItemLimit: 15,
    reviewFilter: {
        sortBy: {
            recent: 'recent',
            helpful: 'helpful',
        },
        filterByStar: {
            positive: 'positive',
            critical: 'critical',
            1: 'one_star',
            2: 'two_star',
            3: 'three_star',
            4: 'four_star',
            5: 'five_star',
        },
        formatType: {
            all_formats: 'all_formats',
            current_format: 'current_format',
        },
    },
    geo: {
        US: {
            country: 'United States of America',
            currency: 'USD',
            symbol: '$',
            host: 'www.amazon.com',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.match(/.*\$([0-9.]+)/);

                if (formatedPrice.length > 0) {
                    return parseFloat(formatedPrice[1]);
                }
                return 0.0;
            },
            product_information: {
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                    Language: { key: 'language' },
                    Publisher: { key: 'publisher' },
                    'Reading level': { key: 'reading_level' },
                    'Grade Level': { key: 'grade_level' },
                    Hardcover: { key: 'hardcover' },
                    Paperback: { key: 'paperback' },
                    'ISBN-10': { key: 'ISBN-10' },
                    'ISBN-13': { key: 'ISBN-13' },
                },
            },
        },
        AU: {
            country: 'Australia',
            currency: 'AUD',
            symbol: '$',
            host: 'www.amazon.com.au',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\.]/g, '');
                return parseFloat(formatedPrice);
            },
            product_information: {
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        BR: {
            country: 'Brazil',
            currency: 'BRL',
            symbol: 'R$',
            host: 'www.amazon.com.br',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\,]/g, '');
                return parseFloat(formatedPrice.replace(/,/g, '.'));
            },
            product_information: {
                // <<------ NOT CORRECT! Requires translation of the {fields} key values. I don't have much time to do it
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        CA: {
            country: 'Canada',
            currency: 'CAD',
            symbol: '$',
            host: 'www.amazon.ca',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\.]/g, '');
                return parseFloat(formatedPrice);
            },
            product_information: {
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        CN: {
            country: 'China',
            currency: 'CNY',
            host: 'www.amazon.cn',
            symbol: '??',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\.]/g, '');
                return parseFloat(formatedPrice);
            },
            product_information: {
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    ????????????: { key: 'dimensions' },
                    ????????????: { key: 'weight' },
                    ?????????: { key: 'manufacturer' },
                },
            },
        },
        FR: {
            country: 'France',
            currency: 'EUR',
            host: 'www.amazon.fr',
            symbol: '???',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\,]/g, '').replace(',', '.');
                return parseFloat(formatedPrice);
            },
            product_information: {
                // <<------ NOT CORRECT! Requires translation of the {fields} key values. I don't have much time to do it
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        DE: {
            country: 'Germany',
            currency: 'EUR',
            host: 'www.amazon.de',
            symbol: '???',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\.]/g, '');
                return parseFloat(formatedPrice);
            },
            product_information: {
                // <<------ NOT CORRECT! Requires translation of the {fields} key values. I don't have much time to do it
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        IN: {
            country: 'India',
            currency: 'INR',
            host: 'www.amazon.in',
            symbol: '???',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\.]/g, '');
                return parseFloat(formatedPrice);
            },
            product_information: {
                // <<------ NOT CORRECT! Requires translation of the {fields} key values. I don't have much time to do it
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        IT: {
            country: 'Italy',
            currency: 'EUR',
            host: 'www.amazon.it',
            symbol: '???',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\,]/g, '').replace(',', '.');
                return parseFloat(formatedPrice);
            },
            product_information: {
                // <<------ NOT CORRECT! Requires translation of the {fields} key values. I don't have much time to do it
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        MX: {
            country: 'Mexico',
            currency: 'MXN',
            host: 'www.amazon.com.mx',
            symbol: 'M$',
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\.]/g, '');
                return parseFloat(formatedPrice);
            },
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            product_information: {
                // <<------ NOT CORRECT! Requires translation of the {fields} key values. I don't have much time to do it
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        NL: {
            country: 'Netherlands',
            currency: 'EUR',
            host: 'www.amazon.nl',
            symbol: '???',
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\,]/g, '').replace(',', '.');
                return parseFloat(formatedPrice);
            },
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            product_information: {
                // <<------ NOT CORRECT! Requires translation of the {fields} key values. I don't have much time to do it
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        SG: {
            country: 'Singapore',
            currency: 'SGD',
            host: 'www.amazon.sg',
            symbol: '$',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\.]/g, '');
                return parseFloat(formatedPrice);
            },
            product_information: {
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        ES: {
            country: 'Spain',
            currency: 'EUR',
            host: 'www.amazon.es',
            symbol: '???',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\,]/g, '').replace(',', '.');
                return parseFloat(formatedPrice);
            },
            product_information: {
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Dimensiones del producto': { key: 'dimensions' },
                    Fabricante: { key: 'manufacturer' },
                    'Producto en Amazon.es desde': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Departamento: { key: 'department' },
                },
            },
        },
        TR: {
            country: 'Turkey',
            currency: 'TRY',
            host: 'www.amazon.com.tr',
            symbole: '???',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\,]/g, '').replace(',', '.');
                return parseFloat(formatedPrice);
            },
            product_information: {
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    '??r??n Boyutlar??': { key: 'dimensions' },
                    '??r??n A????rl??????': { key: 'weight' },
                    ??retici: { key: 'manufacturer' },
                    'Sat????a Sunuldu??u ??lk Tarih': { key: 'available_from' },
                    'Model Numaras??': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        AE: {
            country: 'United Arab Emirates',
            currency: 'AED',
            host: 'www.amazon.ae',
            symbol: '??.??',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\.]/g, '');
                return parseFloat(formatedPrice);
            },
            product_information: {
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        GB: {
            country: 'United Kingdom',
            currency: 'GBP',
            host: 'www.amazon.co.uk',
            symbol: '??',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\.]/g, '');
                return parseFloat(formatedPrice);
            },
            product_information: {
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        JP: {
            country: 'Japan',
            currency: 'JPY',
            host: 'www.amazon.jp',
            symbol: '??',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+]/g, '');
                return parseFloat(formatedPrice);
            },
            product_information: {
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    ???????????????: { key: 'dimensions' },
                    ?????????: { key: 'available_from' },
                    ???????????????: { key: 'weight' },
                },
            },
        },
        SE: {
            country: 'Sweden',
            currency: 'SEK',
            symbol: 'kr',
            host: 'www.amazon.se',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\,]/g, '');
                return parseFloat(formatedPrice.replace(/,/g, '.'));
            },
            product_information: {
                // <<------ NOT CORRECT! Requires translation of the {fields} key values. I don't have much time to do it
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
        PL: {
            country: 'Poland',
            currency: 'Z??',
            symbol: 'z??',
            host: 'www.amazon.pl',
            variants: {
                split_text: 'Click to select ',
            },
            best_seller: (text) => {
                if (text) {
                    const match = text.match(/(#[\d,|]+) in[\s\n ]([\w&'\s]+)/);
                    if (match) {
                        return { rank: parseInt(match[1].replace(/[^\d]/g, '')), category: match[2].trim() };
                    }
                }
                return '';
            },
            review_date: (date) => {
                const dateRegex = /on (.+)$/.exec(date);
                if (dateRegex) {
                    return {
                        date: dateRegex[1],
                        unix: moment(new Date(`${dateRegex[1]} 02:00:00`))
                            .utc()
                            .unix(),
                    };
                }
                return '';
            },
            price_format: (price) => {
                const formatedPrice = price.replace(/[^\d+\,]/g, '');
                return parseFloat(formatedPrice.replace(/,/g, '.'));
            },
            product_information: {
                // <<------ NOT CORRECT! Requires translation of the {fields} key values. I don't have much time to do it
                id: [
                    '#detailBullets_feature_div > ul',
                    '#productDetails_detailBullets_sections1',
                    '#productDetails_techSpec_section_1',
                    '#productDetails_techSpec_section_2',
                    '#detailBulletsWrapper_feature_div > ul:nth-child(5)',
                ],
                fields: {
                    'Amazon Best Sellers Rank': { key: '', rank: true },
                    'Best-sellers rank': { key: '', rank: true },
                    'Best Sellers Rank': { key: '', rank: true },
                    'Package Dimensions': { key: 'dimensions' },
                    'Product Dimensions': { key: 'dimensions' },
                    'Parcel Dimensions': { key: 'dimensions' },
                    'Item Weight': { key: 'weight' },
                    Manufacturer: { key: 'manufacturer' },
                    'Release date': { key: 'available_from' },
                    'Date First Available': { key: 'available_from' },
                    'Item model number': { key: 'model_number' },
                    Department: { key: 'department' },
                },
            },
        },
    },
};
