Radioblokker er noe vi bruker når vi ber brukeren om å ta valg som krever endel
informasjon.

```js
const { RadioButtonInputGroup } = require('.');
initialState = { selected: 'you' };

<RadioButtonInputGroup
    label="Hvem eier bilen du skal forsikre?"
    name="owner"
    onChange={e => setState({ selected: e.target.value })}
    selectedValue={state.selected}
>
    {inputProps => (
        <React.Fragment>
            <RadioBlock {...inputProps} label="Du" value="you" />
            <RadioBlock
                {...inputProps}
                label="Ektefelle, samboer eller registrert partner"
                showChildren={true}
                value="partner"
            >
                Da må ektefelle, samboer eller registrert partner skrive inn
                detaljene sine under.
            </RadioBlock>
            <RadioBlock
                {...inputProps}
                label="Leasingselskap"
                value="leasing-company"
            >
                Da må leasingselskapet gi deg noen detaljer som du må skrive inn
                under.
            </RadioBlock>
        </React.Fragment>
    )}
</RadioButtonInputGroup>;
```

Variant _dark_ for interne løsninger med mørk bakgrunn.

```js { "props": { "className": "sb1ds-example-dark" } }
const { RadioButtonInputGroup } = require('.');
initialState = { selected: 'domesticPartner' };
<RadioButtonInputGroup
    label="Sivilstatus"
    name="relationshipstatus"
    onChange={e => setState({ selected: e.target.value })}
    selectedValue={state.selected}
    dark={true}
>
    {inputProps => (
        <React.Fragment>
            <RadioBlock
                {...inputProps}
                label="Samboer"
                value="domesticPartner"
                dark={true}
            />
            <RadioBlock
                {...inputProps}
                label="Gift"
                showChildren={true}
                value="married"
                dark={true}
            >
                Jeg er gift.
            </RadioBlock>
            <RadioBlock
                {...inputProps}
                label="Ugift"
                value="single"
                dark={true}
            >
                Jeg er ugift.
            </RadioBlock>
        </React.Fragment>
    )}
</RadioButtonInputGroup>;
```
