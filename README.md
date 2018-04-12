# WHY

Imagine the future when you don't need to ssh to boxes to debug services or other system components. Imagine being able to quickly locate the part of your distributed system causing the problems. Imagine knowing exactly what you have in your distributed environment. Imagine knowing rightaway if your distributed system is vulnerable to the latest security vulnerabilities. Imagine releasing new software without downtimes. Imagine being able to scale down without having to worry about loosing data. Imagine software releases that are so easy and automated that even a new engineer can do on day one. Imagine the future where you can use 3rd party system components like lego blocks to build new systems and platforms.

The Service Management API make that future possible.

## Benefits

* Visibility (into what we actually have deployed)
* Observability (of what's going on with the deployed components)
* Monitoring and alerting (based on what's going on with the components)
* Debugging and troubleshooting
* Testing and validation (of the deployment components in production)
* Component lifecycle management (to enable better autoscaling behavior of the components, graceful workload completion, advanced deployment/release models, data/customer migrations)
* Portability (service/component portability between different systems)

# WHAT

This is a life draft of the Service Management API.

# HOW

Before you start make sure you have Docker and Docker Compose installed.

To see the API draft run the `draft_up.command` script if you are using Mac OS X (just click on it :-)). It will start three containers: API mock server, Swagger UI API Console server, ReDoc static API doc server. See the `docker-compose.yaml` file for more details. Note that you can run the individual components separately if you prefer.

You can access the static docs by going to `http://localhost:8888` and you can access the API console by going to `http://localhost:8080`.

Run the `draft_down.command` script when you are done with the API draft. It will remove the containers created by the `draft_up.command` script.

If you want to use/edit the draft locally you need to have node.js installed and
you need to install the Swagger Node module (`npm install -g swagger`) 
along with the `draft` package dependencies (`cd draft && npm install`).

You can validate your OpenAPI/Swagger spec with Prism by running the `validate.command` script. You can run the Prism container directly. Prism is a good option if the Swagger Node tool doesn't tell you enough about the problems with your spec.

# API DRAFT

API spec location: `draft/api/swagger/swagger.yaml`

API mock location: `draft/api/mocks`

You can find sample curl-based API calls in `api_call_examples.json`. The Swagger UI API Console also provides curl-based call examples.

# TOOLS

* [Swagger Node](https://github.com/swagger-api/swagger-node) - API designer with mocking.
* [Swagger Editor](https://github.com/swagger-api/swagger-editor) - OpenAPI/Swagger spec editor.
* [Swagger UI](https://github.com/swagger-api/swagger-ui) - API Console for OpenAPI/Swagger.
* [ReDoc](https://github.com/Rebilly/ReDoc) - Stripe-like static docs for OpenAPI/Swagger.
* [Prims](https://github.com/stoplightio/prism) - OpenAPI/Swagger validation, mocking, etc.
