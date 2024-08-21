const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://playground.4geeks.com',
			agenda: 'Aaron Cuadrado',
			contacts: [],
		},
		actions: {

			getAgenda: () => {
				const { url, agenda } = getStore()
				const { createAgenda } = getActions()
				fetch(`${url}/contact/agendas/${agenda}`)
					.then((response) => {
						console.log(response)
						if (response.status === 404) createAgenda()
						else return response.json()
					})
					.then((responseJson) => {
						console.log(responseJson)
						setStore({ contacts: responseJson.contacts })
					})

			},

			createAgenda: () => {
				const { url, agenda } = getStore()
				const { getAgenda } = getActions()
				fetch(`${url}/contact/agendas/${agenda}`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' }
				})
					.then((response) => {
						console.log(response)
						if (response.status === 201) getAgenda()
						return response.json()
					})
					.then((responseJson) => {
						console.log(responseJson)
					})
			},

			createContact: (datos) => {
				const { url, agenda } = getStore()
				const { getAgenda } = getActions()
				console.log(datos)
				fetch(`${url}/contact/agendas/${agenda}/contacts`, {
					method: 'POST',
					body: JSON.stringify(datos),
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then((response) => {
						if (response.status === 201) getAgenda()
						return response.json()
					})
					.then((datos) => console.log(datos))
			},

			updateContact: (datos, id) => {
				const { url, agenda } = getStore()
				const { getAgenda } = getActions()
				console.log(datos)
				fetch(`${url}/contact/agendas/${agenda}/contacts/${id}`, {
					method: 'PUT',
					body: JSON.stringify(datos),
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then((response) => {
						if (response.status === 200) getAgenda()
						return response.json()
					})
					.then((datos) => console.log(datos))
			},

			deleteContact: (id) => {
				const { url, agenda } = getStore()
				const { getAgenda } = getActions()
				fetch(`${url}/contact/agendas/${agenda}/contacts/${id}`, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then((response) => {
						console.log(response)
						if (response.status === 204) getAgenda()
						return response.json()
					})
					.then((datos) => console.log(datos))
			}
		}
	};
};

export default getState;
