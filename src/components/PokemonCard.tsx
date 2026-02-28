function PokemonCard({ data, setName }) {
    return (
        <div className='card'>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.image} />

            <p>Рост: {pokemon.height}</p>
            <p>Вес: {pokemon.weight}</p>

          <div className='types'>
            {pokemon.types.map(type => (
              <span className='type'>{type}</span>
            ))}
          </div>
        </div>
    )
}

export default PokemonCard
