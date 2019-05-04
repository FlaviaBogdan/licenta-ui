import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography, Divider } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ReactCodeSinppet from 'react-code-snippet'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    card: {
        minHeight: 190,
        backgroundColor: '#F0F0F0',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        fontFamily: 'Verdana,sans-serif',
        color: 'inherit',
    },

    epSumaary: {

        backgroundColor: '#D8D8D8',
        color: 'black',
        '&:hover': {
            backgroundColor: '#808080',
            color: 'white',
        },
    },

    rootTable: {
        width: '100%',
        margin: theme.spacing.unit * 2,
        overflowX: 'auto',
    },
    table: {
        minWidth: 600,
    },
    epNextSummary: {
        width: 'inherit',
        backgroundColor: '#ad1457',
        color: 'white',
        '&:hover': {
            backgroundColor: '#ad1457',
            color: 'white',
        },
    },
    margin: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },

    epNextContent: {
        backgroundColor: '#ad1457',
    },

    epContent: {
        backgroundColor: '#D8D8D8',
    },

    dividerStyle: {
        border: 0,
        borderTopWidth: '4em',
        margin: '20px',
    }

});

let id = 0;
function createData(w1, w2, w3, w4, w5, w6) {
    id += 1;
    return { id, w1, w2, w3, w4, w5, w6 };
}

const rows = [
    createData('abstract', 'assert', 'boolean', 'break', 'byte', 'case'),
    createData('catch', 'char', 'class', 'const', 'continue', 'default'),
    createData('do', 'double', 'else', 'enum', 'extends', 'final'),
    createData('finally', 'float', 'for', 'goto', 'if', 'implements'),
    createData('import', 'instanceof', 'int', 'interface', 'long', 'native'),
    createData('new	package', 'private', 'protected', 'public', 'return'),
    createData('hort', 'static', 'strictfp', 'super', 'switch', 'synchronized'),
    createData('this', 'throw', 'throws', 'transient', 'try', 'void'),
];

const listBasicSyntax = [
    {
        title: 'Obiectele',
        description: 'Obiectele au atribute si comportament. Spre exemplu: un caine are atributele: culoare, nume rasa si comportamentul de a-si misca coada, a latra si a manca. Un obiect este o instanta a clasei.',
    },
    {
        title: 'Clasa',
        description: 'O clasa poate fi definita de catre un template care descrie comportamentul/atributele obiectelor suportate de clasa',
    },
    {
        title: 'Metodele',
        description: 'O metoda este un comportament. O clasa poate contine mai multe metote. In metode este scrisa logica, sunt manipulate datele si sunt executate toate actiunile',
    },
    {
        title: 'Variabile de instanta',
        description: 'Fiecare obiect are setul lui unic de variabile de instanta. Atributele unui set sunt create prin valori asignate acestor variabile de instanta',
    },

];
function BasycSyntax(props) {
    const { classes } = props;
    return (
        <div>
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom>Ce inseamna mostenire?</Typography>
                        <Typography variant="subtitle1" paragraph>
                            <b> Mostenirea</b> poate fi definite ca si procesul unde o clasa primeste propietatile(metodele si field-urile) altei clase. Cu ajutorul mostenirii, informatia poate fi manevrata in-tro ordine ierarhica.
                       </Typography>
                        <Typography variant="subtitle1" paragraph>
                            Clasa care mosteneste propietatile altei clase este cunoscuta ca si subclasa (clasa derivate, clasa copil) si clasa ale carei propietati sunt mostenite este cunoscuta ca si superclasa (clasa baza, clasa parinte).

                        </Typography>

                        <Divider style={{ marginTop: '18px' }} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Cuvantul rezervat EXTENDS</Typography>
                        <Typography variant="subtitle1" paragraph>
                            <i>EXTENDS</i> este cuvantul cheie folosit pentru a mosteni propietatile unei clase. Mai jos este sintaxa cuvantului extends.
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            Sintaxa:
                        </Typography>
                        <Grid item xs={12}>
                            <Card >
                                <CardContent>
                                    <div>
                                        <Typography variant="h6" gutterBottom>Exemplu</Typography>
                                        <ReactCodeSinppet lang="java" code={`class Super {
   .....
   .....
}
class Sub extends Super {
   .....
   .....
}
`} />
                                    </div>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Typography variant="h6" gutterBottom paragraph>
                            Exemplu
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            Mai jos este un exemplu care demonstreaza cum are loc mostenirea in Java. In acest exemplu puteti observa doua clase numite Calculation si My_Calculation.
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            Folosind cuvantul extends, clasa My_Calculation mosteneste metodele addition() si Substraction() ale clasei Calculation.
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            Pentru a rula exemplul, copiati urmatorul cod sursa intr-un fisier cu numele My_Calculation.java.
                        </Typography>
                        <Grid item xs={12}>
                            <Card >
                                <CardContent>
                                    <div>
                                        <Typography variant="h6" gutterBottom>Exemplu</Typography>
                                        <ReactCodeSinppet lang="java" code={`class Calculation {
   int z;
	
   public void addition(int x, int y) {
      z = x + y;
      System.out.println("The sum of the given numbers:"+z);
   }
	
   public void Subtraction(int x, int y) {
      z = x - y;
      System.out.println("The difference between the given numbers:"+z);
   }
}

public class My_Calculation extends Calculation {
   public void multiplication(int x, int y) {
      z = x * y;
      System.out.println("The product of the given numbers:"+z);
   }
	
   public static void main(String args[]) {
      int a = 20, b = 10;
      My_Calculation demo = new My_Calculation();
      demo.addition(a, b);
      demo.Subtraction(a, b);
      demo.multiplication(a, b);
   }
}
`} />
                                    </div>
                                    <div className={classes.actions}>
                                        <Button variant="contained" color="secondary" size="medium" className={classes.margin} target="_blank" href="http://tpcg.io/y2azyW">
                                            Ruleaza codul
                                    <img src={require('./Icons/RunCode.png')} className={classes.rightIcon} />
                                        </Button>
                                    </div>
                                </CardContent>
                                <CardActions>

                                </CardActions>
                            </Card>
                        </Grid>
                        <Typography variant="subtitle1" gutterBottom paragraph>
                            Compilati si executati codul de mai sus conform pasilor urmatori:
                     </Typography>
                        <div>

                            <ReactCodeSinppet lang="java" code={`javac My_Calculation.java
java My_Calculation`} />
                        </div>
                        <Typography variant="subtitle1" gutterBottom paragraph>
                            Dupa executarea urmatorului program, veti obtine urmatorul rezultat:
                        </Typography>
                        <div>
                            <Typography variant="h6" gutterBottom>Rezultat</Typography>
                            <ReactCodeSinppet lang="java" code={`The sum of the given numbers:30
The difference between the given numbers:10
The product of the given numbers
`} />
                        </div>
                        <Typography variant="subtitle1" gutterBottom paragraph>
                            In programul dat, cand un obiect de tipul clasei My_Calculation este creat, o copie a cee ace contine acesta este facuta. De acea cand folosim un obiect de tipul subclasei putem accesa membrii unei superclase.
                        </Typography>
                        <Paper style={{ margin: '20px', backgroundColor: '#D8D8D8', alignContent: 'center', justifyContent: 'center' }}>
                            <img src={require('./Images/inheritance.jpg')} style={{ margin: '10px' }} />
                        </Paper>
                        <Typography variant="subtitle1" gutterBottom paragraph>
                            Variabila de referinta a superclasei poate stoca obiectul subclasei, dar folosind acea variabila poti acesa doar membri superclasei, deci pentru a accesa atat membri superclasei cat si a subclasei este recomandat ca intotdeauna sa create o variabila de referinta catre subclasa.
                       </Typography>
                        <Typography variant="subtitle1" gutterBottom paragraph>
                            Daca considerati programul de mai sus, puteti instatia clasa ca in exemplul de mai jos, dar folosind variabila de referinta a superclasei (_cal in acest caz) nu putem apela metoda Multiplication(), care apartine subclasei My_Calculation.
</Typography>
                        <div>

                            <ReactCodeSinppet lang="java" code={`Calculation demo = new My_Calculation();
demo.addition(a, b);
demo.Subtraction(a, b);

`} />
                        </div>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.epNextSummary} >

                                <Typography className={classes.heading} style={{ marginLeft: '5px', }}>Notitia</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.epNextContent}>
                                <div>
                                    <Typography variant="subtitle1" paragraph style={{ color: 'white' }}>
                                        O subclasa mosteneste toti membri (field-uri, metode si clase) din superclasa. Constructorii nu sunt membri, deci ei nu sunt mosteniti de subclasa, dar constructorul superclasei poate fi invocate din subclasa.
                                                </Typography>

                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Cuvantul rezervat SUPER</Typography>
                        <Typography variant="subtitle1" paragraph>
                            Cuvantul super este similar cu <i>this</i>. Mai jos sunt scenarile unde super poate fi folosit:
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            <ul>
                                <li>
                                    -	Este folosit pentru a diferentia membrii superclasei de membrii subclasei, in cazul in care acestia au acelasi nume.
                            </li>
                                <li>
                                    D-	Este folosit pentru a invoca constructorul superclasei din subclasa.
                            </li>

                            </ul>



                        </Typography>

                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Diferentierea membrilor: </Typography>
                        <Typography variant="subtitle1" paragraph>
                            Daca o clasa mosteneste propietatiile altei clase si daca membrii superclasei au acelasi nume cu cei ai subclasei, pentru a diferentia aceste variabile folosim cuvantul super cum este ilustrat mai jos:
                    </Typography>
                        <div>

                            <ReactCodeSinppet lang="java" code={`super.variable
super.method();
`} />
                        </div>
                        <Typography variant="subtitle1" paragraph>
                            Aceasta sectiune pune la dispozitie un program care demonstreaza folosirea cuvantuluui super.
</Typography>
                        <Typography variant="subtitle1" paragraph>
                            In programul dat, avem doua clase numite Sub_class si Super_class, ambele avand o metoda numita display(), dar care are diferite implementaru, precum si o variabila num cu diferite valori. Invocam display(), care este metoda ambelor clase si prntam valoarea variabilei num a ambelor clase. Aici se poate observa ca am folosit cuvantul super pentru a diferentia membrii superclasei de cei ai subclasei.
</Typography>
                        <Typography variant="subtitle1" paragraph>
                            Copiaza si lipeste urmatorul cod sursa intr-un fisier numit Sub_class.java
</Typography>
                        <Card >
                            <CardContent>
                                <div>
                                    <Typography variant="h6" gutterBottom>Exemplu</Typography>
                                    <ReactCodeSinppet lang="java" code={`class Super_class {
   int num = 20;

   // display method of superclass
   public void display() {
      System.out.println("This is the display method of superclass");
   }
}

public class Sub_class extends Super_class {
   int num = 10;

   // display method of sub class
   public void display() {
      System.out.println("This is the display method of subclass");
   }

   public void my_method() {
      // Instantiating subclass
      Sub_class sub = new Sub_class();

      // Invoking the display() method of sub class
      sub.display();

      // Invoking the display() method of superclass
      super.display();

      // printing the value of variable num of subclass
      System.out.println("value of the variable named num in sub class:"+ sub.num);

      // printing the value of variable num of superclass
      System.out.println("value of the variable named num in super class:"+ super.num);
   }

   public static void main(String args[]) {
      Sub_class obj = new Sub_class();
      obj.my_method();
   }
}
`} />
                                </div>
                                <div className={classes.actions}>
                                    <Button variant="contained" color="secondary" size="medium" className={classes.margin} target="_blank" href="http://tpcg.io/y2azyW">
                                        Ruleaza codul
                                    <img src={require('./Icons/RunCode.png')} className={classes.rightIcon} />
                                    </Button>
                                </div>
                            </CardContent>
                            <CardActions>

                            </CardActions>
                        </Card>
                        <Typography variant="subtitle1" paragraph>
                            Compileaza si executa urmatorul cod folosind sintaxa:
                        </Typography>
                        <div>

                            <ReactCodeSinppet lang="java" code={`javac Super_Demo
java Super
`} />
                        </div>
                        <Typography variant="subtitle1" paragraph>
                            Executand programul vei vedea urmatorul rezultat:
                        </Typography>
                        <div>

                            <ReactCodeSinppet lang="java" code={`This is the display method of subclass
This is the display method of superclass
value of the variable named num in sub class:10
value of the variable named num in super class:20
`} />
                        </div>

                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Apelarea constructorului superclasei</Typography>
                        <Typography variant="subtitle1" paragraph>
                            Daca o clasa mosteneste propietatile altei clase, subclasa isi insuseste in mod automat constructorul default al superclasei. Dar daca vrei sa apelezi un constructor parametrizat al superclasei, ai nevoie sa folosesti cuvantul super:
                        </Typography>

                        <Typography variant="subtitle1" paragraph>
                            Programul dat in aceasta sectiune demonstreaza cum folosesti cuvantul sper ca sa invoci constructorul cu parametrii al superclasei. Acest program contine o superclasa si o subclasa, unde superclasa contine un constructor cu parametrii care accepta o valoarea intreaga, si folosim cuvantul super pentru a chema constructorur cu parametrii al superclasei.
                </Typography>
                        <Typography variant="subtitle1" paragraph>
                            Copiaza si lipeste urmatorul cod intr-un fisier numit Subclass.java
</Typography>
                        <div>
                            <ReactCodeSinppet lang="java" code={`super(values);`} />
                        </div>

                        <Card >
                            <CardContent>
                                <div>
                                    <Typography variant="h6" gutterBottom>Exemplu</Typography>
                                    <ReactCodeSinppet lang="java" code={`class Superclass {
   int age;

   Superclass(int age) {
      this.age = age; 		 
   }

   public void getAge() {
      System.out.println("The value of the variable named age in super class is: " +age);
   }
}

public class Subclass extends Superclass {
   Subclass(int age) {
      super(age);
   }

   public static void main(String argd[]) {
      Subclass s = new Subclass(24);
      s.getAge();
   }
}

`} />
                                </div>
                                <div className={classes.actions}>
                                    <Button variant="contained" color="secondary" size="medium" className={classes.margin} target="_blank" href="http://tpcg.io/y2azyW">
                                        Ruleaza codul
                                    <img src={require('./Icons/RunCode.png')} className={classes.rightIcon} />
                                    </Button>
                                </div>
                            </CardContent>
                            <CardActions>

                            </CardActions>
                        </Card>
                        <Typography variant="subtitle1" paragraph>
                            Compileaza si executa codul de mai sus prin urmatoarea sintaxa:
                        </Typography>
                        <div>
                            <ReactCodeSinppet lang="java" code={`javac Subclass
java Subclass
`} />
                        </div>
                        <Typography variant="subtitle1" paragraph>
                            Dupa executia programului vei primii urmatorul rezultat:
                        </Typography>
                        <div>
                            <ReactCodeSinppet lang="java" code={`The value of the variable named age in super class is: 24`} />
                        </div>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Relatia IS-A</Typography>
                        <Typography variant="subtitle1" paragraph>
                            IS-A este un fel de a spune: acest obiect este un tip al acelui obiect. Lasa-ne sa iti aratam cum folosim cuvantul extends pentru a realiza mostenirea.
                        </Typography>
                        <div>
                            <ReactCodeSinppet lang="java" code={`public class Animal {
}

public class Mammal extends Animal {
}

public class Reptile extends Animal {
}

public class Dog extends Mammal {
}
`} />
                        </div>
                        <Typography variant="subtitle1" paragraph>
                            Acum, bazar pe exemplul de mai sus, in termenii programarii orientate pe obiect, urmatoarele afirmatii sunt adevarate:
                        </Typography>
                        <Typography variant="subtitle1" >
                            <ul>
                                <li>
                                    Animal este superclasa clasei Mammal
                            </li>
                                <li>
                                    Animal este superclasa clasei Reptile
                            </li>
                                <li>
                                    Mammal and Reptile sunt subclase ale Clasei Animal
                            </li>
                                <li>
                                    Caine este subclasa atat a clasei Mammal cat si a clasei Animal.
                            </li>
                            </ul>
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            Acum, daca consideram relatia IS-A, putem spune:
                        </Typography>
                        <ul>
                            <li>Mammal IS-A Animal</li>
                            <li>Reptile IS-A Animal</li>
                            <li>Dog IS-A Mammal</li>
                            <li>Deci: Dog IS-A Animal as well</li>
                        </ul>
                        <Typography variant="subtitle1" paragraph>
                            Cu ajutorul cuvantului extends, subclasa va fi capabila sa mosteneasca propietatile superclasei cu exceptia propietatilor private ale acesteia.
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            Ne putem asigura ca Mammal este cu adevarat un Animal cu ajutorul operatorului instance.
                        </Typography>
                        <Card >
                            <CardContent>
                                <div>
                                    <Typography variant="h6" gutterBottom>Exemplu</Typography>
                                    <ReactCodeSinppet lang="java" code={`class Animal {
}

class Mammal extends Animal {
}

class Reptile extends Animal {
}

public class Dog extends Mammal {

   public static void main(String args[]) {
      Animal a = new Animal();
      Mammal m = new Mammal();
      Dog d = new Dog();

      System.out.println(m instanceof Animal);
      System.out.println(d instanceof Mammal);
      System.out.println(d instanceof Animal);
   }
}
`} />
                                </div>
                                <div className={classes.actions}>
                                    <Button variant="contained" color="secondary" size="medium" className={classes.margin} target="_blank" href="http://tpcg.io/y2azyW">
                                        Ruleaza codul
                                    <img src={require('./Icons/RunCode.png')} className={classes.rightIcon} />
                                    </Button>
                                </div>
                            </CardContent>
                            <CardActions>

                            </CardActions>
                        </Card>
                        <Typography variant="subtitle1" paragraph>
                            Programul de mai sus va produce rezultatul:
                        </Typography>
                        <div>
                            <ReactCodeSinppet lang="java" code={`true
true
true
`} />
                        </div>
                        <Typography variant="subtitle1" paragraph>
                            Avand in vedere ca avem o buna intelegere a cuvantului extends, haideti sa ne uitam cum putem folosi cuvantul implements pentru a crea o relatie Is-A.
</Typography>
                        <Typography variant="subtitle1" paragraph>
                            In general, cuvantul mplements este flosit cu clase pentru a mosteni propietatile unei interfete. Interfetele nu pot fi niciodata extinse de cate o clasa.
</Typography>
                        <div>
                            <ReactCodeSinppet lang="java" code={`public interface Animal {
}

public class Mammal implements Animal {
}

public class Dog extends Mammal {
}
`} />
                        </div>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Cuvantul rezervat instanceof</Typography>
                        <Typography variant="subtitle1" paragraph>
                            Haideti sa folosim instanceof pentru a verifica daca Mammal este cu adevarat un Animal si daca Dog este un Animal.
                        </Typography>
                        <Card >
                            <CardContent>
                                <div>
                                    <Typography variant="h6" gutterBottom>Exemplu</Typography>
                                    <ReactCodeSinppet lang="java" code={`interface Animal{}
class Mammal implements Animal{}

public class Dog extends Mammal {

   public static void main(String args[]) {
      Mammal m = new Mammal();
      Dog d = new Dog();

      System.out.println(m instanceof Animal);
      System.out.println(d instanceof Mammal);
      System.out.println(d instanceof Animal);
   }
}
`} />
                                </div>
                                <div className={classes.actions}>
                                    <Button variant="contained" color="secondary" size="medium" className={classes.margin} target="_blank" href="http://tpcg.io/y2azyW">
                                        Ruleaza codul
                                    <img src={require('./Icons/RunCode.png')} className={classes.rightIcon} />
                                    </Button>
                                </div>
                            </CardContent>
                            <CardActions>

                            </CardActions>
                        </Card>

                        <Typography variant="subtitle1" paragraph>
                            Vom obtine urmatorul rezultat:
                        </Typography>
                        <div>
                            <ReactCodeSinppet lang="java" code={`true
true
true
`} />
                        </div>
                        <Divider />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Relatia HAS-A</Typography>
                        <Typography variant="subtitle1" paragraph>
                            Aceste relatii sunt in mod principal bazate pe folosinta. Aceasta determina daca o anumita clasa are un anumit lucru. Aceasta relatia ajta la reducerea duplicarii codului si pentru bug-uri.
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            Haideti sa privim un exemplu
                        </Typography>
                        <div>
                            <ReactCodeSinppet lang="java" code={`public class Vehicle{}
public class Speed{}

public class Van extends Vehicle {
   private Speed sp;
} 
`} />
                        </div>
                        <Typography variant="subtitle1" paragraph>
                            Aceasta arata ca casa Van HAS-A Speed. Avand o clasa separate pentru Speed, nu trebuie sa punem intre cod-ul care apartine de Speed inauntrul clasei Van, cee ace face posibila refolosirea clasei Speed in multiple aplicatii.
</Typography>
                        <Typography variant="subtitle1" paragraph>
                            In  POO, user-ul nu trebuie sa isi faca griji in privinta carui obiect face munca adevarata. Pentru a obtine asta, clasa Van ascunde detalile implementari fata de userii clasei Van. Deci, practice cee ace se intampla este ca user-ul o sa ii ceara clasei Van sa faca o anumita actiune, iar aceasta clasa ori va face munca ea insasi sau ii vac ere unei alte clase sa faca aceasta actiune.
</Typography>
                        <Typography variant="h6" paragraph gutterBottom>
                            Tipuri de mostenire:
</Typography>
                        <Typography variant="subtitle1" paragraph>
                            Exista mai multe tipuri de mostenire: mostenire singulara, mostenire pe mai multe nivele, mostenire ierarhica, mostenire multipla(nu este suportata de Java).
</Typography>
                        <img src={require('./Images/inheritanceTypes.png')} />
                        <Typography variant="subtitle1" paragraph>
                        Un lucru foarte important de amintit este ca Java nu suporta mostenirea multipla. Asta inseamna ca o clasa nu poate extinde mai mult de o clasa. Deci ceea ce urmeaza este illegal:
                        </Typography>
                        <div>
                        <Typography variant="subtitle1" paragraph>
                      Exemplu
                        </Typography>
                            <ReactCodeSinppet lang="java" code={`public class extends Animal, Mammal{} `} />
                        </div>
                        <Typography variant="subtitle1" paragraph>
                        Totusi o clasa poate implementa una sau mai multe interfete, cee ace a ajutat Java sa scape de imposibilitate multiplei mostenirii.
                    </Typography>
   
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.epNextSummary} >
                            <img src={require('./Icons/Question_Icon.png')} />
                            <Typography className={classes.heading} style={{ marginLeft: '5px' }} >
                                Ce urmeaza?
                    </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.epNextContent}>
                            <div>
                                <Typography variant="subtitle1" style={{ color: 'white' }}>
                                    In urmatorul capitol vei invata cum se poate face suprascrierea in Java.
                         </Typography>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>
                </Grid>
        </div>

        </div >
    )
}

BasycSyntax.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasycSyntax);