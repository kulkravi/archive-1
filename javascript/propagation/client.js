const { NodeSDK } = require('@opentelemetry/sdk-node');
const {
  SimpleSpanProcessor,
  ConsoleSpanExporter,
} = require('@opentelemetry/sdk-trace-node');
const {
  UndiciInstrumentation,
} = require('@opentelemetry/instrumentation-undici');

const sdk = new NodeSDK({
  spanProcessors: [new SimpleSpanProcessor(new ConsoleSpanExporter())],
  instrumentations: [new UndiciInstrumentation()],
});
sdk.start();

const { request } = require('undici');

request('http://localhost:8080/rolldice').then((response) => {
  response.body.json().then((json) => console.log(json));
});
