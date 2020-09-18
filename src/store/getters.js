// getters are functions.
export const getters = {
    creatureCMCs: state => {
        const selectedSet = state.selectedSet;

        let labels = [];
        let data = [];

        if (selectedSet) {
            const cmcCounts = {};
            const creatures = state.sets[selectedSet].data.cards.filter(card => card.types.indexOf('Creature') >= 0);
            creatures.forEach(creature => {
                const cmc = creature.convertedManaCost;

                cmcCounts[cmc] = cmcCounts[cmc] || 0;
                cmcCounts[cmc]++;
            });

            labels = Object.keys(cmcCounts);
            data = Object.values(cmcCounts);
        }

        const chartData = {
            labels,
            datasets: [{
                label: 'CMC',
                data,
            }],
        };

        return chartData;
    },

    creaturePowers: state => {
        const selectedSet = state.selectedSet;

        let labels = [];
        let data = [];

        if (selectedSet) {
            const powers = {};
            const creatures = state.sets[selectedSet].data.cards.filter(card => card.types.indexOf('Creature') >= 0);
            creatures.forEach(creature => {
                const power = creature.power;

                powers[power] = powers[power] || 0;
                powers[power]++;
            });

            labels = Object.keys(powers);
            data = Object.values(powers);
        }

        const chartData = {
            labels,
            datasets: [{
                label: 'Power',
                data,
            }],
        };

        return chartData;
    },


    selectedSet: state => state.selectedSet,

    setIDs: state => Object.keys(state.sets),
};