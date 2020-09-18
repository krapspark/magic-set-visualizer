// getters are functions.
export const getters = {
    cmcCounts: state => {
        const cmcCounts = {};
        const creatures = state.sets.znr.data.cards.filter(card => card.types.indexOf('Creature') >= 0);
        creatures.forEach(creature => {
            const cmc = creature.convertedManaCost;

            cmcCounts[cmc] = cmcCounts[cmc] || 0;
            cmcCounts[cmc]++;
        });

        const chartData = {
            labels: Object.keys(cmcCounts),
            datasets: [{
                label: 'CMC',
                data: Object.values(cmcCounts),
            }],
        };

        return chartData;
    },
};