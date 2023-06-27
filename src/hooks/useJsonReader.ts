function useJsonReader() {
	return <T>(fileName: string) => new Promise<T>((resolve, reject) => {
		fetch(`https://vandeflame.github.io/portfolio/assets/${fileName}.json`)
			.then(resp => resp.json() as T)
			.then(resp => {
				if (resp) {
					resolve(resp);
				} else {
					reject(
						new Error(`Error reading ${fileName}. Empty data`)
					);
				}
			})
			.catch(err => reject(err));
	});
}

export { useJsonReader };
